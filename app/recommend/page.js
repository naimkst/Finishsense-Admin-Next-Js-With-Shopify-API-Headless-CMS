"use client";
import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import SideBarMenu from "../../components/Sidebar";
import Header from "../../components/Header";
import Image from "next/image";
import { client } from "@/lib/shopifyBuy";
import Link from "next/link";
import { Loader } from "@/components/Loader";
import { toFixed } from "@/lib/helpers";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [orders, setOrders] = useState(null);

  useState(() => {
    // const getOrders = async () => {
    //   try {
    //     await fetch("/api/getOrders")
    //       .then((response) =>
    //         response.json().then((data) => {
    //           console.log(data?.data?.edges);
    //           setOrders(data?.data?.edges);
    //         })
    //       )
    //       .catch((error) => {
    //         console.error("Failed to fetch product metafields:", error);
    //       });
    //   } catch (error) {
    //     console.log("Opps! Something went wrong");
    //   }
    // };
    // getOrders();

    async function fetchProductRecommendations() {
      try {
        const response = await fetch("/api/recommendations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        console.log("Recommended Products:", data.recommendations);
        setProducts(data.recommendations);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      }
    }

    // Fetch recommendations when needed
    fetchProductRecommendations();
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
                  <h3>Recommended Products</h3>
                </div>
              </div>
            </div>
            <PerfectScrollbar>
              <div className="product-wrap">
                <div className="product-items">
                  {products.map((item, index) => (
                    <div key={`product-${index}`} className="product-item-wrap">
                      <Link href={`/product/${item.handle}`}>
                        <div className="product-item">
                          <div className="product-img">
                            <Image
                              src={item?.featuredImage?.url}
                              width={item?.featuredImage?.width}
                              height={item?.featuredImage?.height}
                              alt={item?.title}
                            />
                          </div>
                          <div className="product-text">
                            <h3>{item?.title}</h3>
                            <ul>
                              {item?.variants?.edges[0]?.node?.sku && (
                                <li>
                                  Part Number:{" "}
                                  {item?.variants?.edges[0]?.node?.sku}
                                </li>
                              )}
                              {item?.vendor && (
                                <li>Manufacturer: {item?.vendor}</li>
                              )}
                              <li>
                                List Price:{" "}
                                {item?.variants?.edges[0]?.node?.compareAtPrice
                                  ?.currencyCode == "USD"
                                  ? "$"
                                  : item?.variants?.edges[0]?.node
                                      ?.compareAtPrice?.currencyCode}
                                {item?.variants?.edges[0]?.node?.compareAtPrice
                                  ?.amount
                                  ? toFixed(
                                      item?.variants?.edges[0]?.node
                                        ?.compareAtPrice?.amount
                                    )
                                  : toFixed(
                                      item?.variants?.edges[0]?.node?.price
                                        ?.amount
                                    )}
                              </li>
                              <li>
                                Net Price:{" "}
                                <strong>
                                  {item?.variants?.edges[0]?.node?.price
                                    ?.currencyCode == "USD"
                                    ? "$"
                                    : item?.variants?.edges[0]?.node?.price
                                        ?.currencyCode}
                                  {toFixed(
                                    item?.variants?.edges[0]?.node?.price
                                      ?.amount
                                  )}
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
