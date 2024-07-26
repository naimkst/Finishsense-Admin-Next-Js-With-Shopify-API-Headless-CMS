"use client";
import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import SideBarMenu from "../../components/Sidebar";
import Header from "../../components/Header";
import moment from "moment";
import { Button, Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { OrderDetails } from "@/components/OrderDetails";

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const [order, setOrder] = useState("ddd");
  const [productDetails, setProductDetails] = useState(null);
  const [statusCheck, setStatusCheck] = useState("null");
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await fetch("/api/getOrders")
          .then((response) =>
            response.json().then((data) => {
              console.log(data?.data?.edges);
              setOrders(data?.data?.edges);
            })
          )
          .catch((error) => {
            console.error("Failed to fetch product metafields:", error);
          });
      } catch (error) {
        console.log("Opps! Something went wrong");
      }
    };
    fetchProducts();
  }, []);

  const singleOrder = async (id) => {
    const findSingleOrder = await orders.find((item) => item?.node?.name == id);
    console.log(id, findSingleOrder?.node);
    setOrder(findSingleOrder?.node);
  };

  const orderStatus = (status) => {
    setStatusCheck(status.target.checked ? "fulfilled" : "null");
    console.log("status", status.target.checked);
  };

  return (
    <div className="page-wrapper">
      <Header />
      <SideBarMenu />
      <div className="content-area">
        <div className="container-fluid">
          {order && <OrderDetails order={order} orders={orders} />}
          <div className="product-area doc-details mt-3 order-details">
            <div className="row">
              <div className="col-12">
                <div className="top-title">
                  <h3>Order History</h3>

                  <div className="open-order">
                    <h4>Open Orders</h4>
                    <div className="center">
                      <input type="checkbox" onChange={(e) => orderStatus(e)} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PerfectScrollbar>
              <div className="table-wrap">
                <table className="table-responsive cart-wrap">
                  <tbody>
                    {orders?.map(
                      (item, index) =>
                        item?.fulfillment_status != statusCheck && (
                          <tr key={`order-${index}`}>
                            <td className="product">
                              <div className="info">
                                <div className="icon">
                                  <Image
                                    src={
                                      item?.node?.lineItems?.edges[0]?.node
                                        ?.image?.url
                                    }
                                    width={50}
                                    height={50}
                                    className="p-2"
                                    alt=""
                                  />
                                  {/* <i className="icon-ico"></i> */}
                                </div>
                                <div className="text">
                                  <h4>{item?.node?.name}</h4>
                                  {/* <span>Sales</span> */}
                                </div>
                              </div>
                            </td>
                            <td className="date">
                              <b>
                                {item?.node?.totalPriceSet?.presentmentMoney
                                  ?.currencyCode == "USD"
                                  ? "$"
                                  : item?.node?.totalPriceSet?.presentmentMoney
                                      ?.currencyCode}
                                {
                                  item?.node?.totalPriceSet?.presentmentMoney
                                    ?.amount
                                }
                              </b>
                              <span>Amount</span>
                            </td>
                            <td className="date">
                              <b>
                                {moment(item?.node?.updated_at).format(
                                  "DD MMM YYY"
                                )}
                              </b>
                              <span>Date</span>
                            </td>
                            <td className="date">
                              <b>{item?.node?.lineItems?.edges?.length}</b>
                              <span>Products</span>
                            </td>
                            <td className="date">
                              <b>
                                {`${item?.node?.billingAddress?.firstName} ${item?.node?.billingAddress?.lastName}`}{" "}
                              </b>
                              <span>User Name</span>
                            </td>
                            <td className="date">
                              <b>{item?.node?.billingAddress?.phone}</b>
                              <span>Phone Number</span>
                            </td>
                            <td className="action-btn">
                              <span
                                className={
                                  item?.node?.fulfillable == true
                                    ? "complete"
                                    : ""
                                }
                              >
                                {item?.node?.fulfillable == false
                                  ? `${"Pending"}`
                                  : `${"Shipping "}`}
                              </span>
                              <button>
                                <i
                                  onClick={() => singleOrder(item?.node?.name)}
                                  className="fa fa-eye"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </td>
                          </tr>
                        )
                    )}
                  </tbody>
                </table>
              </div>
            </PerfectScrollbar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
