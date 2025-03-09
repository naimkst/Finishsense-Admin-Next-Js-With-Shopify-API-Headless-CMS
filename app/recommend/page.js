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
    console.log("#########", data?.collections?.edges);
  }

  async function fetchCustomer(id, userEmail) {
    try {
      const customerArray = JSON.parse(id); // ✅ Convert string to array safely

      // ✅ Use `Promise.all()` to handle multiple async requests
      const matchedEmails = await Promise.all(
        customerArray.map(async (gid) => {
          console.log("Checking Customer ID:", gid);

          const response = await fetch("/api/getUserById", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customerId: gid }), // ✅ Send each ID properly
          });

          if (!response.ok) {
            console.error("Failed to fetch user:", response.status);
            return null;
          }

          const data = await response.json();
          const fetchedEmail =
            data?.customer?.email?.trim().toLowerCase() || "";

          if (fetchedEmail === userEmail) {
            console.log("✅ Email Matched:", fetchedEmail);
            return fetchedEmail; // ✅ Return first matched email
          }

          return null; // If no match, return null
        })
      );

      // ✅ Find the first non-null matched email
      const firstMatchedEmail =
        matchedEmails.find((email) => email !== null) || null;

      console.log("First Matched Email:", firstMatchedEmail);
      return firstMatchedEmail; // ✅ Return a single string value, not an array
    } catch (error) {
      console.error("❌ Error fetching customers:", error);
      return null; // ✅ Return null if an error occurs
    }
  }
  useEffect(() => {
    if (!collection) return; // Prevent running if collection is not set

    const fetchData = async () => {
      try {
        const userEmail = cookies.userEmail?.trim().toLowerCase() || ""; // Get userEmail from cookies

        const result = await Promise.all(
          collection.map(async (item) => {
            console.log("Metafield Value:!!!!!!", item?.node?.metafield?.value);

            const metaValue = item?.node?.metafield?.value
              ? (await fetchCustomer(item.node.metafield.value, userEmail))
                  ?.trim()
                  .toLowerCase()
              : "";

            return metaValue === userEmail ? item : null;
          })
        );

        const matchedItem = result.find((item) => item !== null) || null;
        console.log("Result:", matchedItem);

        setRecommendProduct(matchedItem?.node?.products?.edges || []);
        console.log(
          "Recommended Products:",
          matchedItem?.node?.products?.edges
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [collection, cookies]); // ✅ Runs when `collection` or `cookies` change

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
                  {recommenProduct.length === 0 ? (
                    <div className="no-product-found">
                      <h3 className="text-center">No Products Found!</h3>
                    </div>
                  ) : (
                    recommenProduct?.map((item, index) => (
                      <div
                        key={`product-${index}`}
                        className="product-item-wrap"
                      >
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
                    ))
                  )}
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
