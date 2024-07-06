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
import { Grid, Button } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import moment from "moment";
import Link from "next/link";

const Documentation = ({ data, info }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const infoData = info?.attributes?.product_info;

  return (
    <div className="col-lg-6">
      <div className="card-design doc-details">
        <Nav tabs>
          {infoData?.InfoFiles?.map((item, index) => (
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab == index + 1 })}
                onClick={() => {
                  toggle(index + 1);
                }}
              >
                {item?.TabTitle}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {infoData?.InfoFiles?.map((item, index) => (
            <TabPane
              key={`info-${index}`}
              tabId={index}
              className={`${index + 1 == activeTab ? "active" : ""}`}
            >
              <PerfectScrollbar>
                <div className="table-wrap">
                  <table className="table-responsive cart-wrap">
                    <tbody>
                      {item?.Files?.data?.map((file, index) => (
                        <tr key={`file-${index}`}>
                          <td className="product">
                            <div className="info">
                              <div className="icon">
                                <i className="icon-ico"></i>
                              </div>
                              <div className="text">
                                <h4>{file?.attributes?.name}</h4>
                                <span>{file?.attributes?.ext}</span>
                              </div>
                            </div>
                          </td>
                          <td className="date">
                            <b>
                              {moment(file?.attributes?.updatedAt).format(
                                "DD-MM-YYYY"
                              )}
                            </b>
                            <span>Last Modified</span>
                          </td>
                          <td className="download-btn">
                            <a
                              target="_blank"
                              download
                              href={`${process.env.NEXT_PUBLIC_API_BASE_URL}${file?.attributes?.url}`}
                            >
                              <button>
                                <i className="icon-download"></i>
                              </button>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </PerfectScrollbar>
            </TabPane>
          ))}
        </TabContent>
      </div>
    </div>
  );
};

export default Documentation;
