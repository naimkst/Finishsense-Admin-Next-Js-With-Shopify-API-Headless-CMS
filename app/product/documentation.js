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

  console.log("infoData", infoData?.InfoFiles);

  return (
    <div className="col-lg-6">
      <div className="card-design doc-details">
        <Nav tabs>
          {infoData?.InfoFiles?.map((item, index) => (
            <NavItem key={`documentId-${index}`}>
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
                                {(file?.attributes?.ext === ".png" ||
                                  file?.attributes?.ext === ".jpg" ||
                                  file?.attributes?.ext === ".jpeg" ||
                                  file?.attributes?.ext === ".svg" ||
                                  file?.attributes?.ext === ".webp" ||
                                  file?.attributes?.ext === ".gif" ||
                                  file?.attributes?.ext === ".bmp" ||
                                  file?.attributes?.ext === ".tiff" ||
                                  file?.attributes?.ext === ".tif" ||
                                  file?.attributes?.ext === ".ico" ||
                                  file?.attributes?.ext === ".heic" ||
                                  file?.attributes?.ext === ".raw") && (
                                  <i className="">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                      color="#3693d9"
                                      fill="none"
                                    >
                                      <path
                                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                      />
                                      <circle
                                        cx="16.5"
                                        cy="7.5"
                                        r="1.5"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                      />
                                      <path
                                        d="M16 22C15.3805 19.7749 13.9345 17.7821 11.8765 16.3342C9.65761 14.7729 6.87163 13.9466 4.01569 14.0027C3.67658 14.0019 3.33776 14.0127 3 14.0351"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M13 18C14.7015 16.6733 16.5345 15.9928 18.3862 16.0001C19.4362 15.999 20.4812 16.2216 21.5 16.6617"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </i>
                                )}
                                {file?.attributes?.ext == ".pdf" && (
                                  <i className="">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                      color="#3693d9"
                                      fill="none"
                                    >
                                      <path
                                        d="M20 13V10.6569C20 9.83935 20 9.4306 19.8478 9.06306C19.6955 8.69552 19.4065 8.40649 18.8284 7.82843L14.0919 3.09188C13.593 2.593 13.3436 2.34355 13.0345 2.19575C12.9702 2.165 12.9044 2.13772 12.8372 2.11401C12.5141 2 12.1614 2 11.4558 2C8.21082 2 6.58831 2 5.48933 2.88607C5.26731 3.06508 5.06508 3.26731 4.88607 3.48933C4 4.58831 4 6.21082 4 9.45584V13M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M19.75 16H17.25C16.6977 16 16.25 16.4477 16.25 17V19M16.25 19V22M16.25 19H19.25M4.25 22V19.5M4.25 19.5V16H6C6.9665 16 7.75 16.7835 7.75 17.75C7.75 18.7165 6.9665 19.5 6 19.5H4.25ZM10.25 16H11.75C12.8546 16 13.75 16.8954 13.75 18V20C13.75 21.1046 12.8546 22 11.75 22H10.25V16Z"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </i>
                                )}
                                {(file?.attributes?.ext == ".doc" ||
                                  file?.attributes?.ext == ".docx" ||
                                  file?.attributes?.ext == ".txt" ||
                                  file?.attributes?.ext == ".rtf" ||
                                  file?.attributes?.ext == ".odt" ||
                                  file?.attributes?.ext == ".xls" ||
                                  file?.attributes?.ext == ".xlsx" ||
                                  file?.attributes?.ext == ".ppt" ||
                                  file?.attributes?.ext == ".pptx" ||
                                  file?.attributes?.ext == ".csv") && (
                                  <i className="">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                      color="#3693d9"
                                      fill="none"
                                    >
                                      <path
                                        d="M20 13V10.6569C20 9.83935 20 9.4306 19.8478 9.06306C19.6955 8.69552 19.4065 8.40649 18.8284 7.82843L14.0919 3.09188C13.593 2.593 13.3436 2.34355 13.0345 2.19575C12.9702 2.165 12.9044 2.13772 12.8372 2.11401C12.5141 2 12.1614 2 11.4558 2C8.21082 2 6.58831 2 5.48933 2.88607C5.26731 3.06508 5.06508 3.26731 4.88607 3.48933C4 4.58831 4 6.21082 4 9.45584V13M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M20.5007 17.2196C20.4486 16.0292 19.674 16 18.6231 16C17.0044 16 16.736 16.406 16.736 18V20C16.736 21.594 17.0044 22 18.6231 22C19.674 22 20.4486 21.9708 20.5007 20.7804M7.26568 19C7.26568 20.6569 6.00155 22 4.44215 22C4.0903 22 3.91437 22 3.78333 21.9196C3.46959 21.7272 3.50098 21.3376 3.50098 21V17C3.50098 16.6624 3.46959 16.2728 3.78333 16.0804C3.91437 16 4.0903 16 4.44215 16C6.00155 16 7.26568 17.3431 7.26568 19ZM12.0007 22C11.1134 22 10.6697 22 10.394 21.7071C10.1184 21.4142 10.1184 20.9428 10.1184 20V18C10.1184 17.0572 10.1184 16.5858 10.394 16.2929C10.6697 16 11.1134 16 12.0007 16C12.8881 16 13.3318 16 13.6074 16.2929C13.8831 16.5858 13.8831 17.0572 13.8831 18V20C13.8831 20.9428 13.8831 21.4142 13.6074 21.7071C13.3318 22 12.8881 22 12.0007 22Z"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                      />
                                    </svg>
                                  </i>
                                )}

                                {(file?.attributes?.ext == ".mp3" ||
                                  file?.attributes?.ext == ".wav" ||
                                  file?.attributes?.ext == ".ogg" ||
                                  file?.attributes?.ext == ".flac" ||
                                  file?.attributes?.ext == ".aac" ||
                                  file?.attributes?.ext == ".m4a") && (
                                  <i className="">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                      color="#3693d9"
                                      fill="none"
                                    >
                                      <circle
                                        cx="6.5"
                                        cy="18.5"
                                        r="3.5"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                      />
                                      <circle
                                        cx="18"
                                        cy="16"
                                        r="3"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                      />
                                      <path
                                        d="M10 18.5L10 7C10 6.07655 10 5.61483 10.2635 5.32794C10.5269 5.04106 11.0175 4.9992 11.9986 4.91549C16.022 4.57222 18.909 3.26005 20.3553 2.40978C20.6508 2.236 20.7986 2.14912 20.8993 2.20672C21 2.26432 21 2.4315 21 2.76587V16"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M10 10C15.8667 10 19.7778 7.66667 21 7"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </i>
                                )}

                                {(file?.attributes?.ext == ".mp4" ||
                                  file?.attributes?.ext == ".mkv" ||
                                  file?.attributes?.ext == ".avi" ||
                                  file?.attributes?.ext == ".wmv" ||
                                  file?.attributes?.ext == ".webm" ||
                                  file?.attributes?.ext == ".mpg" ||
                                  file?.attributes?.ext == ".3gp" ||
                                  file?.attributes?.ext == ".m4v") && (
                                  <i className="">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                      color="#3693d9"
                                      fill="none"
                                    >
                                      <path
                                        d="M17.7001 21.3351C16.5281 21.4998 14.9996 21.4998 12.9501 21.4998H11.0501C7.01955 21.4998 5.0043 21.4998 3.75218 20.2476C2.50006 18.9955 2.50006 16.9803 2.50006 12.9498V11.0498C2.50006 7.01925 2.50006 5.00399 3.75218 3.75187C5.0043 2.49976 7.01955 2.49976 11.0501 2.49976H12.9501C16.9806 2.49976 18.9958 2.49976 20.2479 3.75187C21.5001 5.00399 21.5001 7.01925 21.5001 11.0498V12.9498C21.5001 14.158 21.5001 15.1851 21.4663 16.0648C21.4393 16.7699 21.4258 17.1224 21.1588 17.2541C20.8918 17.3859 20.5932 17.1746 19.9958 16.752L18.6501 15.7998"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M14.9453 12.3948C14.7686 13.0215 13.9333 13.4644 12.2629 14.3502C10.648 15.2064 9.8406 15.6346 9.18992 15.4625C8.9209 15.3913 8.6758 15.2562 8.47812 15.07C8 14.6198 8 13.7465 8 12C8 10.2535 8 9.38018 8.47812 8.92995C8.6758 8.74381 8.9209 8.60868 9.18992 8.53753C9.8406 8.36544 10.648 8.79357 12.2629 9.64983C13.9333 10.5356 14.7686 10.9785 14.9453 11.6052C15.0182 11.8639 15.0182 12.1361 14.9453 12.3948Z"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </i>
                                )}

                                {(file?.attributes?.ext == ".zip" ||
                                  file?.attributes?.ext == ".rar" ||
                                  file?.attributes?.ext == ".7z" ||
                                  file?.attributes?.ext == ".tar" ||
                                  file?.attributes?.ext == ".gz") && (
                                  <i className="">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width="24"
                                      height="24"
                                      color="#3693d9"
                                      fill="none"
                                    >
                                      <path
                                        d="M4 22V9.45584C4 6.21082 4 4.58831 4.88607 3.48933C5.06508 3.26731 5.26731 3.06508 5.48933 2.88607C6.58831 2 8.21082 2 11.4558 2C12.1614 2 12.5141 2 12.8372 2.11401C12.9044 2.13772 12.9702 2.165 13.0345 2.19575C13.3436 2.34355 13.593 2.593 14.0919 3.09188L18.8284 7.82843C19.4065 8.40649 19.6955 8.69552 19.8478 9.06306C20 9.4306 20 9.83935 20 10.6569V14C20 17.7712 20 19.6569 18.8284 20.8284C17.8971 21.7598 16.5144 21.9508 14.0919 21.9899M13 2.5V3C13 5.82843 13 7.24264 13.8787 8.12132C14.7574 9 16.1716 9 19 9H19.5"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M7.5 5.5H7M10 7.5H9.5M7.5 9.5H7M10 11.5226H9.5M7.5 13.5H7"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                      <path
                                        d="M11 22.0001V19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19V22.0001H11Z"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      />
                                    </svg>
                                  </i>
                                )}
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
