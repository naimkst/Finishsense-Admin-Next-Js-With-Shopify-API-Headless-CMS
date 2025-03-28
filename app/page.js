"use client";
import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import SideBarMenu from "../components/Sidebar";
import Header from "../components/Header";
import Image from "next/image";
import { client } from "@/lib/shopifyBuy";
import Link from "next/link";
import { Loader } from "@/components/Loader";
import { toFixed } from "@/lib/helpers";
import { useProducts } from "@/stores/product-store";
import { usePathname } from "next/navigation";

const Home = () => {
  const { setProducts, products } = useProducts();
  const pathname = usePathname();

  const getProduct = async () => {
    await client.product.fetchAll().then((products) => {
      setProducts(products);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!products) return <Loader />;

  return (
    <div className="page-wrapper">
      <Header />
      <SideBarMenu />
      <div className="content-area">
        <div className="container-fluid">
          <div className="product-area">
            <div className="row">
              <div className="col-12">
                <div className="top-title">
                  <h3>All Products</h3>
                </div>
              </div>
            </div>
            <PerfectScrollbar>
              <div className="product-wrap">
                <div className="product-items">
                  {products.length === 0 && (
                    <div className="no-product-found">
                      <h3 className="text-center">No products found!</h3>
                    </div>
                  )}
                  {products.map((item, index) => (
                    <div key={`product-${index}`} className="product-item-wrap">
                      <Link href={`/product/${item.handle}`}>
                        <div className="product-item">
                          <div className="product-img">
                            <Image
                              src={item?.images[0]?.src}
                              width={item?.images[0]?.width}
                              height={item?.images[0]?.height}
                              alt={item?.title}
                            />
                          </div>
                          <div className="product-text">
                            <h3>{item?.title}</h3>
                            <ul>
                              {item?.variants[0]?.sku && (
                                <li>Part Number: {item?.variants[0]?.sku}</li>
                              )}
                              {item?.vendor && (
                                <li>Manufacturer: {item?.vendor}</li>
                              )}
                              <li>
                                List Price:{" "}
                                {item?.variants[0]?.compareAtPrice
                                  ?.currencyCode == "USD"
                                  ? "$"
                                  : item?.variants[0]?.compareAtPrice
                                      ?.currencyCode}
                                {item?.variants[0]?.compareAtPrice?.amount
                                  ? toFixed(
                                      item?.variants[0]?.compareAtPrice?.amount
                                    )
                                  : toFixed(item?.variants[0]?.price?.amount)}
                              </li>
                              <li>
                                Net Price:{" "}
                                <strong>
                                  {item?.variants[0]?.price?.currencyCode ==
                                  "USD"
                                    ? "$"
                                    : item?.variants[0]?.price?.currencyCode}
                                  {toFixed(item?.variants[0]?.price?.amount)}
                                </strong>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
