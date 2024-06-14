"use client";
import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import SideBarMenu from "../components/Sidebar";
import Header from "../components/Header";
import pImg from "/public/images/product.png";
import Image from "next/image";
import { client } from "@/hooks/shopify";

const Home = () => {
  const [products, setProducts] = useState([]);

  useState(() => {
    client.product.fetchAll().then((products) => {
      // Do something with the products
      setProducts(products);
    });
  }, []);

  console.log(products);

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
                  {products.map((item, index) => (
                    <div key={`product-${index}`} className="product-item-wrap">
                      <div className="product-item">
                        <div className="product-img">
                          <Image
                            src={item?.images[0]?.src}
                            width={item?.images[0]?.width}
                            height={item?.images[0]?.height}
                            alt=""
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
                                ? item?.variants[0]?.compareAtPrice?.amount
                                : item?.variants[0]?.price?.amount}
                            </li>
                            <li>
                              Net Price:{" "}
                              <strong>
                                {item?.variants[0]?.price?.currencyCode == "USD"
                                  ? "$"
                                  : item?.variants[0]?.price?.currencyCode}
                                {item?.variants[0]?.price?.amount}
                              </strong>
                            </li>
                          </ul>
                        </div>
                      </div>
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
