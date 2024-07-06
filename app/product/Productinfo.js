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
import { metafield } from "@/lib/helpers";

const Productinfo = ({ data, info }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const infoData = info?.attributes?.product_info?.ProductTab;

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
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {item?.TabText}
                  </ReactMarkdown>
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
