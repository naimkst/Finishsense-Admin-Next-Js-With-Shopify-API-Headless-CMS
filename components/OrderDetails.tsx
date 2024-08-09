import React, { Fragment, useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

export const OrderDetails = ({
  order,
  orders,
  closeModal,
  setShowDetails,
}: any) => {
  return (
    <div className="product-area">
      <div className="row">
        <div className="col-12">
          <div className="top-title">
            <h3>Order Detail</h3>
          </div>
        </div>
      </div>
      <a className="close" onClick={() => setShowDetails(false)}>
        &times;
      </a>

      <PerfectScrollbar>
        <div className="product-wrap">
          <h2>Order {order?.name}</h2>

          <div className="order-details-top">
            <div className="row">
              <div className="col-lg-7">
                {order?.lineItems?.edges?.map((prd: any, index: number) => (
                  <div key={`itemsPrd-${index}`} className="order-prd-list">
                    <div className="product-info">
                      <div className="leftProductDetails">
                        <div className="productImage">
                          <img
                            width={100}
                            height={120}
                            src={prd?.node?.image?.url}
                            alt="product Image"
                          />
                        </div>
                        <div className="orderInfos">
                          <h3>{prd?.node?.product?.title}</h3>
                          <span>SKU: {prd?.node?.sku}</span>
                          <span>Vendor: {prd?.node?.product?.vendor}</span>
                          <span>QTY: {prd?.node?.quantity}</span>
                        </div>
                      </div>

                      <div className="productDetails">
                        <p>{prd?.node?.product?.description}</p>
                        <p>
                          {prd?.node?.product?.priceRangeV2?.maxVariantPrice
                            ?.currencyCode == "USD"
                            ? "$"
                            : prd?.node?.product?.priceRangeV2?.maxVariantPrice
                                ?.currencyCode}
                          {
                            prd?.node?.product?.priceRangeV2?.maxVariantPrice
                              ?.amount
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="col-lg-5">
                <div className="orderSummary">
                  {order?.lineItems?.edges?.map((prd: any, index: number) => (
                    <div key={`sum-${index}`} className="orderDetailsSum">
                      <div className="summaryBox">
                        <span>{index + 1}</span>
                        <div className="summaryContentDiv">
                          <h2>{prd?.node?.product?.title}</h2>
                          <p>
                            {prd?.node?.quantity}
                            <span>
                              X{" "}
                              {prd?.node?.product?.priceRangeV2?.maxVariantPrice
                                ?.currencyCode == "USD"
                                ? "$"
                                : prd?.node?.product?.priceRangeV2
                                    ?.maxVariantPrice?.currencyCode}
                              {
                                prd?.node?.product?.priceRangeV2
                                  ?.maxVariantPrice?.amount
                              }
                            </span>
                          </p>
                        </div>
                      </div>
                      <span className="sumPrice">
                        {prd?.node?.product?.priceRangeV2?.maxVariantPrice
                          ?.currencyCode == "USD"
                          ? "$"
                          : prd?.node?.product?.priceRangeV2?.maxVariantPrice
                              ?.currencyCode}
                        {prd?.node?.quantity *
                          prd?.node?.product?.priceRangeV2?.maxVariantPrice
                            ?.amount}
                      </span>
                    </div>
                  ))}

                  <div className="priceBoxSum">
                    <p className="SubTotal">
                      <span>Subtotal: </span>
                      <span>
                        {order?.subtotalPriceSet?.presentmentMoney
                          ?.currencyCode == "USD"
                          ? "$"
                          : order?.subtotalPriceSet?.presentmentMoney}
                        {order?.subtotalPriceSet?.presentmentMoney?.amount}
                      </span>
                    </p>
                    <p className="grandTotal">
                      <span>Grand Total: </span>
                      <span>
                        {order?.totalPriceSet?.presentmentMoney?.currencyCode ==
                        "USD"
                          ? "$"
                          : order?.totalPriceSet?.presentmentMoney}
                        {order?.totalPriceSet?.presentmentMoney?.amount}
                      </span>
                    </p>
                  </div>
                  <div className="orderButton">
                    <a className="cart-btn" href="/">
                      {order?.fullyPaid ? "Paid" : "Unpaid"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {order?.lineItems?.edges?.map((prd: any, index: number) => (
            <div key={`itemsPrd-${index}`} className="col-lg-12">
              <div className="card-design product-details">
                <div className="product-details-top-text">
                  <h3>{prd?.node?.product?.title}</h3>
                  {prd?.sku && <span>Part Number: {prd?.sku}</span>}
                  {prd?.vendor && (
                    <span>Manufacturer: {prd?.node?.product?.vendor}</span>
                  )}
                  {prd?.product_exists ? (
                    <h4>In Stock</h4>
                  ) : (
                    <h4>Stock Out!</h4>
                  )}
                </div>
                <div className="product-details-bottom">
                  <div className="product-details-img order-product-details-img">
                    <img src={prd?.node?.image?.url} alt="" />
                  </div>
                  <div className="product-details-text">
                    <ul>
                      <li>
                        Price:{" "}
                        {prd?.node?.product?.priceRangeV2?.maxVariantPrice
                          ?.currencyCode == "USD"
                          ? "$"
                          : prd?.node?.product?.priceRangeV2?.maxVariantPrice
                              ?.currencyCode}
                        {
                          prd?.node?.product?.priceRangeV2?.maxVariantPrice
                            ?.amount
                        }
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))} */}
        </div>
      </PerfectScrollbar>
    </div>
  );
};
