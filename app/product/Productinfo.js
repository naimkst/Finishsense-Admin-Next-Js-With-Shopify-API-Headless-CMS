"use client";
import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { stringify } from "querystring";
import rehypeRaw from "rehype-raw";
import { metafield, toFixed } from "@/lib/helpers";
import Link from "next/link";
import Image from "next/image";

const Productinfo = ({ data, info }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const infoData = info?.attributes?.product_info?.ProductTab;

  console.log("infoData", infoData);

  return (
    <div className="col-lg-12">
      <div className="card-design doc-details details-bottom">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab == "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              PRODUCT DETAILS
            </NavLink>
          </NavItem>

          {infoData?.map((item, index) => (
            <NavItem key={`tabs-${index}`}>
              <NavLink
                className={classnames({ active: activeTab == index + 2 })}
                onClick={() => {
                  toggle(index + 2);
                }}
              >
                {item?.TabTitle}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <PerfectScrollbar>
              <div className="details-wrap">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {data?.descriptionHtml}
                </ReactMarkdown>
              </div>
            </PerfectScrollbar>
          </TabPane>
          {infoData?.map((item, index) => (
            <TabPane key={`productTab-${index}`} tabId={index + 2}>
              <PerfectScrollbar>
                <div className="details-wrap">
                  {item?.TabText && (
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                      {item?.TabText}
                    </ReactMarkdown>
                  )}

                  {item?.Products && (
                    <div className="container-fluid">
                      <div className="product-area">
                        <PerfectScrollbar>
                          <div className="product-wrap">
                            <div className="product-items">
                              {item?.Products.map((item, index) => (
                                <div
                                  key={`product-${index}`}
                                  className="product-item-wrap"
                                >
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
                                            <li>
                                              Part Number:{" "}
                                              {item?.variants[0]?.sku}
                                            </li>
                                          )}
                                          {item?.vendor && (
                                            <li>
                                              Manufacturer: {item?.vendor}
                                            </li>
                                          )}
                                          <li>
                                            List Price:{" "}
                                            {item?.variants[0]?.compareAtPrice
                                              ?.currencyCode == "USD"
                                              ? "$"
                                              : item?.variants[0]
                                                  ?.compareAtPrice
                                                  ?.currencyCode}
                                            {item?.variants[0]?.compareAtPrice
                                              ?.amount
                                              ? toFixed(
                                                  item?.variants[0]
                                                    ?.compareAtPrice?.amount
                                                )
                                              : toFixed(
                                                  item?.variants[0]?.price
                                                    ?.amount
                                                )}
                                          </li>
                                          <li>
                                            Net Price:{" "}
                                            <strong>
                                              {item?.variants[0]?.price
                                                ?.currencyCode == "USD"
                                                ? "$"
                                                : item?.variants[0]?.price
                                                    ?.currencyCode}
                                              {toFixed(
                                                item?.variants[0]?.price?.amount
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
                  )}
                </div>
              </PerfectScrollbar>
            </TabPane>
          ))}
        </TabContent>
      </div>
    </div>
  );
};

export default Productinfo;
