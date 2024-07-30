import React, { useState } from "react";
import Link from "next/link";
import Logo from "/public/images/logo.png";
import profile from "/public/images/profile.png";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [open, setOpen] = useState(false);

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
                        <a href="#" onClick={() => setOpen(true)}>
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
          setOpen(false);
        }}
      >
        <div
          className={`mini-cart-content ${
            open ? " mini-cart-content-toggle" : ""
          }`}
        >
          <div className="title"></div>
          <button
            className="mini-cart-close"
            onClick={() => {
              setOpen(false);
            }}
          >
            <i className="ti-close"></i>
          </button>
          <div className="mini-cart-items">
            <p className="top-p">Your Cart (1)</p>

            <div className="mini-cart-item clearfix">
              <div className="mini-cart-item-image">
                <a href="shop.html">
                  <img
                    src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0753%2F8393%2F1172%2Ffiles%2FKKA23.png%3Fv%3D1718275283&w=2048&q=75"
                    width={100}
                    height={100}
                    alt=""
                  />
                </a>
              </div>
              <div className="mini-cart-item-des">
                <h4>
                  <a href="product-single.html">TX-VENICE</a>
                </h4>
                <ul className="product-text-sub">
                  <li>Black</li>
                </ul>
                <a href="#" className="dlt-btn">
                  <i className="ti-trash"></i>
                </a>
              </div>
              <div className="pro-single-btn">
                <span className="price">$200.00</span>
                <div className="quantity cart-plus-minus">
                  <input type="text" value="1" />
                  <div className="dec qtybutton"></div>
                  <div className="inc qtybutton"></div>
                  <div className="dec qtybutton">-</div>
                  <div className="inc qtybutton">+</div>
                  <div className="dec qtybutton">-</div>
                  <div className="inc qtybutton">+</div>
                </div>
              </div>
            </div>
            <div
              className="mini-cart-item clearfix"
              data-bs-toggle="modal"
              data-bs-target="#popup-quickview"
            >
              <div className="mini-cart-item-image">
                <a href="shop.html">
                  <img
                    src="http://localhost:3000/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0753%2F8393%2F1172%2Ffiles%2FKKA23.png%3Fv%3D1718275283&w=2048&q=75"
                    width={100}
                    height={100}
                    alt=""
                  />
                </a>
              </div>
              <div className="mini-cart-item-des">
                <h4>
                  <a href="product-single.html">TX-VENICE</a>
                </h4>
                <ul className="product-text-sub">
                  <li>Black</li>
                </ul>
                <a href="#" className="dlt-btn">
                  <i className="ti-trash"></i>
                </a>
              </div>
              <div className="pro-single-btn">
                <span className="price">$200.00</span>
                <div className="quantity cart-plus-minus">
                  <input type="text" value="1" />
                  <div className="dec qtybutton"></div>
                  <div className="inc qtybutton"></div>
                  <div className="dec qtybutton">-</div>
                  <div className="inc qtybutton">+</div>
                  <div className="dec qtybutton">-</div>
                  <div className="inc qtybutton">+</div>
                </div>
              </div>
            </div>
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
