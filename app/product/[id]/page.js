"use client";
import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import Link from "next/link";
import "react-perfect-scrollbar/dist/css/styles.css";
import SideBarMenu from "../../../components/Sidebar";
import Header from "../../../components/Header";
import Image from "next/image";
import Documentation from "../documentation";
import Productinfo from "../Productinfo";
import { client } from "@/lib/shopify";
import { useParams } from "next/navigation";
import { Loader } from "@/components/Loader";
import { createAdminRestApiClient } from "@shopify/admin-api-client";
import { metafield } from "@/lib/helpers";

const productDetails = () => {
  const [qty, setQty] = useState(1);
  const [products, setProducts] = useState(null);
  const [metafields, setMetafields] = useState([]);
  const router = useParams();

  useState(() => {
    // client.product.fetchByHandle(router.id).then((product) => {
    //   setProducts(product);
    // });
    const fetchMetafields = async () => {
      const data = await fetch("/api/hello", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: router?.id }),
      })
        .then((response) =>
          response.json().then((data) => setProducts(data?.data))
        )
        .catch((error) => {
          console.error("Failed to fetch product metafields:", error);
        });
    };

    fetchMetafields();
  }, [router.id]);

  console.log(router?.id);

  console.log(metafield(products, "accessories"));

  if (products) {
    // Create an empty checkout
    client.checkout.create().then((checkout) => {
      console.log("checkout ", checkout);
      const lineItemsToAdd = [
        {
          variantId: products?.variants?.edges[0].node.id,
          quantity: 1,
        },
      ];

      // Add an item to the checkout variants?.edges[0].node.id
      client.checkout
        .addLineItems(checkout?.id, lineItemsToAdd)
        .then((checkout) => {
          // Do something with the updated checkout
          console.log("=======", checkout?.lineItems); // Array with one additional line item
        });

      client.checkout.fetch(checkout?.id).then((checkout) => {
        // Do something with the checkout
        console.log("444444", checkout);
      });
    });
  }

  if (!products) return <Loader />;

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
                          ? products?.compareAtPriceRange
                              ?.maxVariantCompareAtPrice?.amount
                          : products?.priceRangeV2?.maxVariantPrice?.amount}
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
                          {products?.priceRangeV2?.maxVariantPrice?.amount}
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
                    <Link href="/" className="cart-btn">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Documentation data={products} />
            <Productinfo data={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;
