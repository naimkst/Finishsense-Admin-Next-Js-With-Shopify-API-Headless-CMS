"use client";
import React, { useEffect, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import SideBarMenu from "../../components/Sidebar";
import Header from "../../components/Header";
import moment from "moment";

const Home = () => {
  const [orders, setOrders] = useState(null);
  const [statusCheck, setStatusCheck] = useState("null");
  useEffect(() => {
    const fetchProducts = async () => {
      await fetch("/api/orders")
        .then((response) =>
          response.json().then((data) => {
            setOrders(data);
          })
        )
        .catch((error) => {
          console.error("Failed to fetch product metafields:", error);
        });
    };
    fetchProducts();
  }, []);

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
          <div className="product-area">
            <div className="row">
              <div className="col-12">
                <div className="top-title">
                  <h3>Order Detail</h3>
                </div>
              </div>
            </div>
            <PerfectScrollbar>
              <div className="product-wrap order-details">
                <h2>Order 1654436</h2>
              </div>
            </PerfectScrollbar>
          </div>
          <div className="product-area doc-details mt-3 order-details">
            <div className="row">
              <div className="col-12">
                <div className="top-title">
                  <h3>Order History</h3>

                  <div className="open-order">
                    <h4>Open Orders</h4>
                    <div class="center">
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
                                  <i className="icon-ico"></i>
                                </div>
                                <div className="text">
                                  <h4>{item?.name}</h4>
                                  <span>Sales</span>
                                </div>
                              </div>
                            </td>
                            <td className="date">
                              <b>
                                {item?.currency == "USD" ? "$" : item?.currency}
                                {item?.current_subtotal_price}
                              </b>
                              <span>Amount</span>
                            </td>
                            <td className="date">
                              <b>
                                {moment(item?.updated_at).format("DD MMM YYY")}
                              </b>
                              <span>Date</span>
                            </td>
                            <td className="date">
                              <b>{item?.order_number}</b>
                              <span>Order Number</span>
                            </td>
                            <td className="date">
                              <b>
                                {`${item?.billing_address?.first_name} ${item?.billing_address?.last_name}`}{" "}
                              </b>
                              <span>Purchaser</span>
                            </td>
                            <td className="date">
                              <b>{item?.token}</b>
                              <span>UPS</span>
                            </td>
                            <td className="action-btn">
                              <span
                                className={
                                  item?.fulfillment_status == "fulfilled"
                                    ? "complete"
                                    : ""
                                }
                              >
                                {item?.fulfillment_status == "fulfilled"
                                  ? "Completed"
                                  : "Pending"}
                              </span>
                              <button>
                                <i className="fa fa-eye" aria-hidden="true"></i>
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

export default Home;
