import React, { useState } from "react";
import Link from "next/link";
import Logo from "/public/images/logo.png";
import profile from "/public/images/profile.png";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import { useCart, useCartBar, useCartCount } from "@/stores/product-store";
import { toFixed } from "@/lib/helpers";

const Header = () => {
  const { cartShow, cartBarUpdate } = useCartBar();
  const { cartCount } = useCartCount();
  const { cart } = useCart();

  return (
    <>
      <header>
        <div className="main-header" id="sticky-header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-5">
                <div className="navbar-header">
                  <Link className="navbar-brand site-logo" href="/">
                    <Image src={Logo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-9 col-md-9 col-7">
                <div className="header-right">
                  <div className="search">
                    <form>
                      <input
                        type="text"
                        placeholder="search..."
                        className="form-control input-sm r-10 input-bg-none"
                      />
                      <button className="search-btn">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="right-info">
                    <ul>
                      <li>
                        <a href="#" onClick={() => cartBarUpdate(true)}>
                          <i className="icon-cart25"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-bell"></i>
                          <span>2</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-contact"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="right-profile">
                    <div className="profile-img">
                      <Image src={profile} alt="" />
                    </div>
                    <div className="profile-text">
                      <h4>Drew Heemstra</h4>
                      <span>Area Manager</span>
                    </div>
                    <div className="submenu">
                      <ul>
                        <li>
                          <a href="#">Account Profile</a>
                        </li>
                        <li>
                          <a href="#">Sign Out</a>
                        </li>
                        <li>
                          <a href="#">Contact Us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <OutsideClickHandler
        onOutsideClick={() => {
          cartBarUpdate(false);
        }}
      >
        <div
          className={`mini-cart-content ${
            cartShow ? " mini-cart-content-toggle" : ""
          }`}
        >
          <div className="title"></div>
          <button
            className="mini-cart-close"
            onClick={() => {
              cartBarUpdate(false);
            }}
          >
            <i className="ti-close"></i>
          </button>
          <div className="mini-cart-items">
            <p className="top-p">Your Cart ({cartCount})</p>

            {cart?.lineItems?.map((item, index) => (
              <div
                key={`cartItem-${index}`}
                className="mini-cart-item clearfix"
              >
                <div className="mini-cart-item-image">
                  <a href="shop.html">
                    <img
                      src={item?.variant?.image.src}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </a>
                </div>
                <div className="mini-cart-item-des">
                  <h4>
                    <a href="product-single.html">{item?.title}</a>
                  </h4>
                  <ul className="product-text-sub">
                    <li>SKU:{item?.variant?.sku}</li>
                  </ul>
                  <a href="#" className="dlt-btn">
                    <i className="ti-trash"></i>
                  </a>
                </div>
                <div className="pro-single-btn">
                  <span className="price">
                    {item?.variant?.price?.currencyCode == "USD"
                      ? "$"
                      : item?.variant?.price?.currencyCode}
                    {toFixed(item?.variant?.price?.amount)}
                  </span>
                  <div className="quantity cart-plus-minus">
                    <input type="text" value={item?.quantity} />
                    <div className="dec qtybutton"></div>
                    <div className="inc qtybutton"></div>
                    <div className="dec qtybutton">-</div>
                    <div className="inc qtybutton">+</div>
                    <div className="dec qtybutton">-</div>
                    <div className="inc qtybutton">+</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mini-cart-action clearfix">
            <ul>
              <li>Subtotal(2 items)</li>
              <li>
                <strong>$68,000</strong>
              </li>
            </ul>
            <div className="mini-btn">
              <a href="checkout.html" className="view-cart-btn">
                CONTINUE TO CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Header;
