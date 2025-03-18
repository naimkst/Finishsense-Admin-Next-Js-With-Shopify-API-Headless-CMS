import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import Logo from "/public/images/logo.png";
import profile from "/public/images/profile.png";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import {
  useCart,
  useCartBar,
  useLoader,
  useCollections,
  useProducts,
  useUser,
} from "@/stores/product-store";
import { toFixed } from "@/lib/helpers";
import { client } from "@/lib/shopifyBuy";
import { toast } from "react-toastify";
import { useSearchParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Header = () => {
  const { cartShow, cartBarUpdate } = useCartBar();
  const { cart, cartUpdate } = useCart();
  const { loader, setLoader } = useLoader();
  const { setCollections, collections } = useCollections();
  const [query, setQuery] = useState("");
  const searchRouter = useSearchParams();
  const searchQuery = searchRouter.get("query");
  const router = useRouter();
  const { setProducts, products } = useProducts();
  const { setUser, user } = useUser();

  const removeItem = (item) => {
    setLoader(true);
    if (!cart || cart?.lines?.edges?.length === 0) {
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

  const signOut = () => {
    Cookies.remove("shopifyCustomerAccessToken");
    toast.success("Logged out successfully.");
    // window.location.reload();
    router.push("/login");
  };

  async function fetchCollections() {
    const response = await fetch("/api/getCollectionId", {
      method: "POST",
    });
    const data = await response.json();
    setCollections(data?.collections?.edges);
  }

  useEffect(() => {
    fetchCollections();
  }, [router.id]);

  const getAllProduct = async () => {
    await client.product.fetchAll().then((products) => {
      setProducts(products);
    });
  };

  const getCustomer = async () => {
    console.log("customer");
    const response = await fetch("/api/customer", {
      method: "POST",
    });
    const data = await response.json();
    setUser(data?.customer);
  };
  useEffect(() => {
    getCustomer();
  }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     await fetch("/api/createCart", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) =>
  //         response.json().then((data) => {
  //           cartUpdate(data?.data);
  //         })
  //       )
  //       .catch((error) => {
  //         console.error("Failed to fetch product metafields:", error);
  //       });
  //   };
  //   fetchProducts();
  // }, []);

  console.log("@@@@@@@@@@@@@@@@@@", cart);

  return (
    <>
      <header>
        <div className="main-header" id="sticky-header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-5">
                <div className="navbar-header" onClick={() => getAllProduct()}>
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
                            {cart?.lines?.edges?.length
                              ? cart?.lines?.edges?.length
                              : 0}
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
                        <a href="https://www.finishsense.io/pages/contact">
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
                      <h4>
                        {user?.firstName} {user?.lastName}
                      </h4>
                      {/* <span>{user?.lastName}</span> */}
                    </div>
                    <div className="submenu">
                      <ul>
                        <li>
                          <Link href="/profile">Account Profile</Link>
                        </li>
                        <li>
                          <a onClick={() => signOut()} href="#">
                            Sign Out
                          </a>
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
              Your Cart ({cart?.lines?.edges ? cart?.lines?.edges?.length : 0})
            </p>

            {cart?.lines?.edges?.map((item, index) => (
              <div
                key={`cartItem-${index}`}
                className="mini-cart-item clearfix"
              >
                <div className="mini-cart-item-image">
                  <a href="shop.html">
                    <img
                      src={item?.node?.merchandise?.image.url}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </a>
                </div>
                <div className="mini-cart-item-des">
                  <h4>
                    <a href="product-single.html">
                      {item?.node?.merchandise?.product?.title}
                    </a>
                  </h4>
                  <ul className="product-text-sub">
                    <li>SKU:{item?.node?.merchandise?.sku}</li>
                  </ul>
                  <a
                    href="#"
                    className="dlt-btn"
                    onClick={() => removeItem(item?.node?.id)}
                  >
                    <i className="ti-trash"></i>
                  </a>
                </div>
                <div className="pro-single-btn">
                  <span className="price">
                    {item?.node?.merchandise?.price?.currencyCode == "USD"
                      ? "$"
                      : item?.node?.merchandise?.price?.currencyCode}
                    {toFixed(item?.node?.merchandise?.price?.amount)}
                  </span>
                  <div className="quantity cart-plus-minus">
                    <input type="text" value={item?.node?.quantity} />
                    <div className="dec qtybutton"></div>
                    <div className="inc qtybutton"></div>
                    {loader ? (
                      <div className="dec qtybutton">-</div>
                    ) : (
                      <div
                        className="dec qtybutton"
                        onClick={() =>
                          updateItem(item?.node?.id, item?.node?.quantity - 1)
                        }
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
                        onClick={() =>
                          updateItem(item?.node?.id, item?.node?.quantity - 1)
                        }
                      >
                        -
                      </div>
                    )}

                    {loader ? (
                      <div className="inc qtybutton">+</div>
                    ) : (
                      <div
                        className="inc qtybutton"
                        onClick={() =>
                          updateItem(item?.node?.id, item?.node?.quantity + 1)
                        }
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
                Subtotal ({cart?.lines?.edges ? cart?.lines?.edges?.length : 0})
                items{" "}
              </li>
              <li>
                <strong>
                  {cart?.cost?.subtotalAmount?.currencyCode == "USD"
                    ? "$"
                    : cart?.cost?.subtotalAmount?.currencyCode}
                  {toFixed(cart?.cost?.subtotalAmount?.amount)}
                </strong>
              </li>
            </ul>
            <div className="mini-btn">
              {loader ? (
                <a href="#" className="view-cart-btn">
                  Loading...
                </a>
              ) : (
                <a href={cart?.checkoutUrl} className="view-cart-btn">
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
