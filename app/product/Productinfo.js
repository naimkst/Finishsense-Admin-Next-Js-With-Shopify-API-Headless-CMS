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

const Productinfo = ({ data }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  console.log(stringify(data?.descriptionHtml));

  return (
    <div className="col-lg-12">
      <div className="card-design doc-details details-bottom">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              PRODUCT DETAILS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              SPECIFICATIONS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              SPARE PARTS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              ACCESSORIES
            </NavLink>
          </NavItem>
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
          <TabPane tabId="2">
            <PerfectScrollbar>
              <div className="details-wrap">
                <ul>
                  <li>Dangerous Good - false</li>
                  <li>Pressure purging material - 109 psi</li>
                  <li>Ambient temperature - 10 - 40 °C</li>
                  <li>Rpm range - 0 - 200 rpm</li>
                  <li>Typical rpm - 20 - 170 rpm</li>
                  <li>Pressure difference, max. - 44 psi</li>
                  <li>Ambient temperature US - 50 - 104 °F</li>
                </ul>
              </div>
            </PerfectScrollbar>
          </TabPane>
          <TabPane tabId="3">
            <PerfectScrollbar>
              <div className="table-wrap"></div>
            </PerfectScrollbar>
          </TabPane>
          <TabPane tabId="4">
            <PerfectScrollbar>
              <div className="table-wrap">{metafield(data, "accessories")}</div>
            </PerfectScrollbar>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default Productinfo;
