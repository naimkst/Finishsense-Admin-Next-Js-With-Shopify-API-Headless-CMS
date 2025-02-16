"use client";
import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import SideBarMenu from "../../components/Sidebar";
import Header from "../../components/Header";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "@/components/Loader";
import { toFixed } from "@/lib/helpers";
import { useCookies } from "react-cookie";

const Home = () => {
  const [collection, setCollection] = useState(null);
  const [recommenProduct, setRecommendProduct] = useState([]);
  const [cookies] = useCookies(["userEmail"]);

  async function fetchCollections() {
    const response = await fetch("/api/getCollectionId", {
      method: "POST",
    });
    const data = await response.json();
    setCollection(data?.collections?.edges);
  }

  useEffect(() => {
    if (!collection) return; // Prevent running if collection is not set

    const userEmail = cookies.userEmail || ""; // Get userEmail from cookies
    console.log("User Email from Cookie:", userEmail);

    const result =
      collection.find((item) => {
        const metaValue = item?.node?.metafield?.value?.trim().toLowerCase();
        const email = userEmail?.trim().toLowerCase();
        return metaValue === email;
      }) || null;

    console.log("Result:", result);

    setRecommendProduct(result?.node?.products?.edges || []);
    console.log("Recommended Products:", result?.node?.products?.edges);
  }, [collection, cookies]); // Re-run when collection or cookies change

  useEffect(() => {
    fetchCollections();
  }, []);

  if (!collection) return <Loader />;

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
                  {recommenProduct?.map((item, index) => (
                    <div key={`product-${index}`} className="product-item-wrap">
                      <Link href={`/product/${item?.node?.handle}`}>
                        <div className="product-item">
                          <div className="product-img">
                            <Image
                              src={item?.node?.featuredImage?.url}
                              width={item?.node?.featuredImage?.width}
                              height={item?.node?.featuredImage?.height}
                              alt={item?.node?.title}
                            />
                          </div>
                          <div className="product-text">
                            <h3>{item?.node?.title}</h3>
                            <ul>
                              {item?.node?.variants?.edges[0]?.node?.sku && (
                                <li>
                                  Part Number:{" "}
                                  {item?.node?.variants?.edges[0]?.node?.sku}
                                </li>
                              )}
                              {item?.node?.vendor && (
                                <li>Manufacturer: {item?.node?.vendor}</li>
                              )}
                              {/* <li>
                                List Price:{" "}
                                {item?.node?.variants?.edges[0]?.node
                                  ?.compareAtPrice?.currencyCode == "USD"
                                  ? "$"
                                  : item?.variants?.edges[0]?.node
                                      ?.compareAtPrice?.currencyCode}
                                {item?.node?.variants?.edges[0]?.node
                                  ?.compareAtPrice?.amount
                                  ? toFixed(
                                      item?.variants?.edges[0]?.node
                                        ?.compareAtPrice?.amount
                                    )
                                  : toFixed(
                                      item?.variants?.edges[0]?.node?.price
                                        ?.amount
                                    )}
                              </li> */}
                              <li>
                                Net Price:{" "}
                                <strong>
                                  {item?.node?.priceRange?.minVariantPrice
                                    ?.currencyCode == "USD"
                                    ? "$"
                                    : item?.node?.priceRange?.minVariantPrice
                                        ?.currencyCode}
                                  {toFixed(
                                    item?.node?.priceRange?.maxVariantPrice
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
