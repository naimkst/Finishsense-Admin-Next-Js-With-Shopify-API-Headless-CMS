import React, { Fragment, useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import { useCollections } from "@/stores/product-store";

const menus = [
  {
    id: 1,
    title: "Maintainable Assets",
    link: "/maintain",
    submenu: [
      {
        id: 11,
        title: "Maintainable Assets",
        link: "/maintain",
      },
      {
        id: 12,
        title: "Maintainable Assets",
        link: "/maintain",
      },
      {
        id: 13,
        title: "Maintainable Assets",
        link: "/maintain",
      },
    ],
  },

  {
    id: 3,
    title: "Recommend Spares",
    link: "/recommend",
    submenu: [
      {
        id: 31,
        title: "Recommend Spares",
        link: "/recommend",
      },
    ],
  },
  {
    id: 4,
    title: "Order Management",
    link: "/order",
    submenu: [
      {
        id: 41,
        title: "Sales Orders",
        link: "/order",
      },
      {
        id: 44,
        title: "Service Orders",
        link: "/order",
      },
    ],
  },
];

const SideBarMenu = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { collections } = useCollections();

  const toggleClass = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    if (isToggled) {
      document.body.classList.add("_toggle");
    } else {
      document.body.classList.remove("_toggle");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("_toggle");
    };
  }, [isToggled]);

  const [openId, setOpenId] = useState(0);
  const [menuActive, setMenuState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <div className="side-bar-wrap">
      <div className="sidebarleft">
        <div className="c-btn">
          <button onClick={toggleClass}>
            <i className="icon-navbar"></i>
          </button>
        </div>
        <ul>
          <li onClick={toggleClass}>
            <Link href="/" className="active">
              <i className="icon-shopping_bag"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="icon-dashboard"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="icon-walet"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="icon-alarm"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="icon-tool"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="icon-calender"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="icon-chart"></i>
            </Link>
          </li>
          <li>
            <Link href="/">
              <i className="icon-market"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar">
        <div className="menu-close" onClick={toggleClass}>
          <i className="fa fa-times"></i>
        </div>
        <nav className="sidebar-scrool">
          <div className="top">
            <h2>Store Menu</h2>
          </div>

          <div className="product-menu">
            <Link
              href="/"
              className={`${isOpen ? "active" : null}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              All Products
            </Link>
            {isOpen && (
              <ul className="submenu">
                {collections.map((item, i) => {
                  return (
                    <li key={i}>
                      <Link href={`?collection=${item?.node.handle}`}>
                        {item?.node?.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="main-menu">
            {menus.map((item, mn) => {
              return (
                <ListItem
                  className={item.id === openId ? "active" : null}
                  key={mn}
                >
                  {item.submenu ? (
                    <Fragment>
                      <p
                        onClick={() =>
                          setOpenId(item.id === openId ? 0 : item.id)
                        }
                      >
                        {item.title}
                        <i
                          className={item.id === openId ? "icon-07" : "icon-07"}
                        ></i>
                      </p>
                      <Collapse
                        in={item.id === openId}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List className="subMenu">
                          <Fragment>
                            {item.submenu.map((submenu, i) => {
                              return (
                                <ListItem key={i}>
                                  <Link
                                    onClick={ClickHandler}
                                    className="active"
                                    href={submenu.link}
                                  >
                                    {submenu.title}
                                  </Link>
                                </ListItem>
                              );
                            })}
                          </Fragment>
                        </List>
                      </Collapse>
                    </Fragment>
                  ) : (
                    <Link className="active" href={item.link}>
                      {item.title}
                    </Link>
                  )}
                </ListItem>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SideBarMenu;
