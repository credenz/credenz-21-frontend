import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import "../CSS/navbar.css";
import IEEELOGO from "../images/ieeelogo.png";
import PISBLOGO from "../images/pisb.png";
import TextSliced from "./TextSliced";
const NavbarCustom = ({ comingSoon, relative }) => {
  const page = useParams().page || "";
  return (
    <>
      <Navbar
        variant="dark"
        className={
          relative
            ? "navbar-wrapper position-relative bg-color-custom"
            : "navbar-wrapper bg-color-custom"
        }
        expand="xl">
        <Navbar.Brand
          href="https://pictieee.in"
          target="_blank"
          className="header-header">
          <img src={PISBLOGO} alt="pisblogo" className="nav-logo ms-4" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="s-auto">
            <NavLink
              to={`/`}
              isActive={() => page === ""}
              className="header-title">
              <TextSliced title="Home" />
            </NavLink>
            <NavLink
              // hidden={comingSoon || true}
              to={`/events`}
              isActive={() => page === "events"}
              className="header-title">
              <TextSliced title="Events" />
            </NavLink>
            <NavLink
              to={`/about`}
              isActive={() => page === "about"}
              className="header-title">
              <TextSliced title="About" />
            </NavLink>
            <NavLink
              to={`/contact`}
              isActive={() => page === "contact"}
              className="header-title">
              <TextSliced title="Contact" />
            </NavLink>
            {/* <NavLink
              to={`/profile`}
              isActive={() => page === "profile"}
              className="header-title"
            >
              <TextSliced title="PROFILE" />
            </NavLink> */}
            <NavLink
              to={`/login`}
              isActive={() => page === "login"}
              className="header-title">
              <TextSliced title="Login" />
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
