import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { API } from "../axios/API";
import "../CSS/navbar.css";
import IEEELOGO from "../images/ieeelogo.png";
import PISBLOGO from "../images/pisb.png";
import TextSliced from "./TextSliced";
const NavbarCustom = (props) => {
  const [page, setPage] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [userDetails, setUserDetails] = useState({});
  const [paymentDone, setPaymentDone] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkPayment = async () => {
    let token = localStorage.getItem("credenz_access_token");
    let username = localStorage.getItem("credenz_username");
    if (token) {
      API.getUserDetails(username)
        .then((res) => {
          setUserDetails(res.data);
          setIsLoggedIn(true);
          if (res.data.payment === "PO") {
            setPaymentDone(false);
            // show payment button - Handeled ✔
          } else if (res.data.payment === "CO") {
            setPaymentDone(true);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkPayment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar
        variant="dark"
        className={
          props.relative
            ? "navbar-wrapper position-relative bg-color-custom"
            : "navbar-wrapper bg-color-custom"
        }
        expand="md"
      >
        <Navbar.Brand
          href="https://pictieee.in"
          target="_blank"
          className="header-header"
        >
          <img src={PISBLOGO} alt="pisblogo" className="nav-logo ms-4" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-2" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="s-auto">
            <NavLink
              to={`/`}
              isActive={() => page === ""}
              className="header-title"
              onClick={() => {
                setPage("");
              }}
            >
              <TextSliced title="Home" activeLink={page === ""} />
            </NavLink>
            <NavLink
              // hidden={comingSoon || true}
              to={`/events`}
              isActive={() => page === "events"}
              className="header-title"
              onClick={() => {
                setPage("events");
              }}
            >
              <TextSliced title="Events" activeLink={page === "events"} />
            </NavLink>
            <NavLink
              to={`/about`}
              isActive={() => page === "about"}
              className="header-title"
              onClick={() => {
                setPage("about");
              }}
            >
              <TextSliced title="About" activeLink={page === "about"} />
            </NavLink>
            <NavLink
              to={`/contact`}
              isActive={() => page === "contact"}
              className="header-title"
              onClick={() => {
                setPage("contact");
              }}
            >
              <TextSliced
                title="Contact"
                hidden
                activeLink={page === "contact"}
              />
            </NavLink>
            <NavLink
              to={`/login`}
              isActive={() => page === "login"}
              onClick={() => {
                setPage("login");
              }}
              className="header-title"
              hidden={isLoggedIn ? (!paymentDone ? false : true) : false}
            >
              <TextSliced
                title={isLoggedIn ? (!paymentDone ? "Pay Now" : "") : "Login"}
                activeLink={page === "login"}
              />
            </NavLink>
            <NavLink
              to={`/`}
              isActive={() => page === "logout"}
              className="header-title"
              onClick={() => {
                localStorage.removeItem("credenz_access_token");
                localStorage.removeItem("credenz_username");
                // eslint-disable-next-line no-restricted-globals
                location.reload();
              }}
              hidden={!isLoggedIn}
            >
              <TextSliced title="Logout" activeLink={page === "logout"} />
            </NavLink>
          </Nav>
          <a href="https://www.ieee.org" target="_blank" rel="noreferrer">
            <img
              src={IEEELOGO}
              alt="iEEElogo"
              className="nav-logo logo-ieee me-3 ms-5"
            />
          </a>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
