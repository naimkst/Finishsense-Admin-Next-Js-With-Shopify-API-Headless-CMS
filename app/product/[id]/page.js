"use client";
import React, { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";
import Link from "next/link";
import "react-perfect-scrollbar/dist/css/styles.css";
import SideBarMenu from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Image from "next/image";
import Documentation from "../documentation";
import Productinfo from "../Productinfo";
import { client } from "@/lib/shopifyBuy";
import { useParams } from "next/navigation";
import { Loader } from "@/components/Loader";
import { metafield, toFixed } from "@/lib/helpers";
import useFetch from "@/hooks/useFetch";
import {
  useCart,
  useCartBar,
  useCartCount,
  useLoader,
  useProductInfo,
} from "@/stores/product-store";
import { toast } from "react-toastify";

const productDetails = () => {
  const [qty, setQty] = useState(1);
  const [products, setProducts] = useState(null);
  const [getInfo, setProductInfo] = useState([]);
  const router = useParams();
  const { product, update } = useProductInfo();
  const { cart, cartUpdate } = useCart();
  const { cartBarUpdate } = useCartBar();
  const { loader, setLoader } = useLoader();

  const {
    loading,
    error,
    data: getProductInfo,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/product-infos?populate=deep`
  );

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("/api/singleProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: router?.id }),
      })
        .then((response) =>
          response.json().then((data) => {
            setProducts(data?.data);
          })
        )
        .catch((error) => {
          console.error("Failed to fetch product metafields:", error);
        });
    };
    fetchProducts();
  }, [router.id]);

  useEffect(() => {
    update(getProductInfo);

    if (product) {
      const getInfoData = product?.data?.find(
        (item) => item?.attributes?.product_info?.Product?.handle === router.id
      );
      setProductInfo(getInfoData);
    }
  }, [getProductInfo, router.id]);

  const addToCart = async () => {
    setLoader(true);
    console.info("product", products);
    console.info("product", products?.variants?.edges[0]?.node?.id);
    const lineItemsToAdd = [
      {
        variantId: products?.variants?.edges[0]?.node?.id,
        quantity: qty,
      },
    ];

    console.log("lineItemsToAdd", Object.keys(cart).length);

    try {
      if (Object.keys(cart).length == 0) {
        client.checkout
          .create()
          .then((checkout) => {
            const checkoutId = checkout?.id;
            client.checkout
              .addLineItems(checkoutId, lineItemsToAdd)
              .then((checkout) => {
                cartUpdate(checkout);
                cartBarUpdate(true);
                setLoader(false);
                toast.success("Item added to cart.");
              })
              .catch((error) => {
                console.log("Failed to add item in cart");
                setLoader(false);
                toast.error("Failed to add item in cart");
              });
          })
          .catch((error) => {
            console.log("Error creating checkout");
            setLoader(false);
            toast.error("Error creating checkout");
          });
      } else {
        const checkoutId = cart.id;
        client.checkout
          .addLineItems(checkoutId, lineItemsToAdd)
          .then((checkout) => {
            cartUpdate(checkout);
            cartBarUpdate(true);
            setLoader(false);
            toast.success("Item added to cart.");
          })
          .catch((error) => {
            console.error("Error adding line items:", error);
            setLoader(false);
            toast.error("Failed to add item in cart");
          });
      }
    } catch (error) {
      console.log("Failed to add item in cart");
      setLoader(false);
      toast.error("Failed to add item in cart");
    }
  };

  if (!products || loading) return <Loader />;

  return (
    <div className="page-wrapper">
      <Header />
      <SideBarMenu />
      <div className="content-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-design product-details">
                <div className="product-details-top-text">
                  <h3>{products?.title}</h3>
                  {products?.variants[0]?.sku && (
                    <span>Part Number: {products?.variants[0]?.sku}</span>
                  )}
                  {products?.vendor && (
                    <span>Manufacturer: {products?.vendor}</span>
                  )}
                  {products?.hasOutOfStockVariants ? (
                    <h4>Stock Out!</h4>
                  ) : (
                    <h4>In Stock</h4>
                  )}
                </div>
                <div className="product-details-bottom">
                  <div className="product-details-img">
                    <span>
                      <Image
                        src={products?.featuredImage?.url}
                        fill="true"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={products?.title}
                        position="relative"
                      />
                    </span>
                  </div>
                  <div className="product-details-text">
                    <ul>
                      <li>
                        List Price:{" "}
                        {products?.compareAtPriceRange?.maxVariantCompareAtPrice
                          ?.currencyCode == "USD"
                          ? "$"
                          : products?.compareAtPriceRange
                              ?.maxVariantCompareAtPrice?.currencyCode}
                        {products?.compareAtPriceRange?.maxVariantCompareAtPrice
                          ?.amount
                          ? toFixed(
                              products?.compareAtPriceRange
                                ?.maxVariantCompareAtPrice?.amount
                            )
                          : toFixed(
                              products?.priceRangeV2?.maxVariantPrice?.amount
                            )}
                      </li>
                      <li>
                        Net Price:{" "}
                        <strong>
                          {" "}
                          {products?.priceRangeV2?.maxVariantPrice
                            ?.currencyCode == "USD"
                            ? "$"
                            : products?.priceRangeV2?.maxVariantPrice
                                ?.currencyCode}
                          {toFixed(
                            products?.priceRangeV2?.maxVariantPrice?.amount
                          )}
                        </strong>
                      </li>
                    </ul>
                    <p>{metafield(products, "estimated_delivery")}</p>

                    <div className="pro-single-btn">
                      <Grid className="quantity cart-plus-minus">
                        <Button
                          className="dec qtybutton"
                          onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}
                        >
                          -
                        </Button>
                        <input
                          value={qty}
                          onChange={() => setQty(qty)}
                          type="text"
                        />
                        <Button
                          className="inc qtybutton"
                          onClick={() => setQty(qty + 1)}
                        >
                          +
                        </Button>
                      </Grid>
                    </div>
                    <div className="cart-btn" onClick={() => addToCart()}>
                      {loader ? "Loading..." : "Add To Cart"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Documentation data={products} info={getInfo} />
            <Productinfo data={products} info={getInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;
