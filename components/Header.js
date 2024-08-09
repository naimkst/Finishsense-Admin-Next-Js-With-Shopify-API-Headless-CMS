import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import Logo from "/public/images/logo.png";
import profile from "/public/images/profile.png";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import {
  useCart,
  useCartBar,
  useCartCount,
  useLoader,
} from "@/stores/product-store";
import { toFixed } from "@/lib/helpers";
import { client } from "@/lib/shopifyBuy";
import { toast } from "react-toastify";
import { useSearchParams, useRouter } from "next/navigation";

const Header = () => {
  const { cartShow, cartBarUpdate } = useCartBar();
  const { cart, cartUpdate } = useCart();
  const { loader, setLoader } = useLoader();
  const [query, setQuery] = useState("");
  const searchRouter = useSearchParams();
  const searchQuery = searchRouter.get("query");
  const router = useRouter();

  const removeItem = (item) => {
    setLoader(true);
    if (!cart || cart.lineItems.length === 0) {
      console.error("Cart is empty or does not exist.");
      return;
    }
    const checkoutId = cart.id;

    client.checkout
      .removeLineItems(checkoutId, [item])
      .then((checkout) => {
        cartUpdate(checkout);
        toast.success("Item removed from cart.");
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error removing line item:", error);
        toast.error("Oops! Something went wrong. Please try again.");
        setLoader(false);
      });
  };

  const updateItem = (item, quantity) => {
    setLoader(true);
    if (!cart || cart.lineItems.length === 0) {
      console.error("Cart is empty or does not exist.");
      toast.error("Cart is empty or does not exist.");
      return;
    }
    const lineItemsToUpdate = [{ id: item, quantity: quantity }];
    client.checkout
      .updateLineItems(cart?.id, lineItemsToUpdate)
      .then((checkout) => {
        cartUpdate(checkout);
        console.log(checkout.lineItems);
        toast.success("Item updated in cart.");
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error updating line item:", error);
        toast.error("Oops! Something went wrong. Please try again.");
        setLoader(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    router.push(`/search/?query=${query}`);
  };

  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);



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
                    <form onSubmit={handleSearch}>
                      <input
                        type="text"
                        placeholder="search..."
                        className="form-control input-sm r-10 input-bg-none"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      <button className="search-btn" type="submit">
                        <i className="fa fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="right-info">
                    <ul>
                      <li>
                        <a href="#" onClick={() => cartBarUpdate(true)}>
                          <i className="icon-cart25"></i>
                          <span>
                            {cart?.lineItems ? cart?.lineItems.length : 0}
                          </span>
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
            <p className="top-p">
              Your Cart ({cart?.lineItems ? cart?.lineItems.length : 0})
            </p>

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
                  <a
                    href="#"
                    className="dlt-btn"
                    onClick={() => removeItem(item?.id)}
                  >
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
                    {loader ? (
                      <div className="dec qtybutton">-</div>
                    ) : (
                      <div
                        className="dec qtybutton"
                        onClick={() => updateItem(item?.id, item?.quantity - 1)}
                      >
                        -
                      </div>
                    )}

                    <div className="inc qtybutton">+</div>
                    {loader ? (
                      <div className="dec qtybutton">-</div>
                    ) : (
                      <div
                        className="dec qtybutton"
                        onClick={() => updateItem(item?.id, item?.quantity - 1)}
                      >
                        -
                      </div>
                    )}

                    {loader ? (
                      <div className="inc qtybutton">+</div>
                    ) : (
                      <div
                        className="inc qtybutton"
                        onClick={() => updateItem(item?.id, item?.quantity + 1)}
                      >
                        +
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mini-cart-action clearfix">
            <ul>
              <li>
                Subtotal ({cart?.lineItems ? cart?.lineItems.length : 0}) items{" "}
              </li>
              <li>
                <strong>
                  {cart?.subtotalPrice?.currencyCode == "USD"
                    ? "$"
                    : cart?.subtotalPrice?.currencyCode}
                  {toFixed(cart?.subtotalPrice?.amount)}
                </strong>
              </li>
            </ul>
            <div className="mini-btn">
              {loader ? (
                <a href="#" className="view-cart-btn">
                  Loading...
                </a>
              ) : (
                <a href={cart?.webUrl} className="view-cart-btn">
                  CONTINUE TO CHECKOUT
                </a>
              )}
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Header;
