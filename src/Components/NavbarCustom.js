import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useParams, NavLink, Link } from "react-router-dom";
import TextSliced from "./TextSliced";
import PISBLOGO from "../images/pisb.png";
import IEEELOGO from "../images/ieeelogo.png";
import "../CSS/navbar.css";
const NavbarCustom = ({ comingSoon }) => {
  const [active, setActive] = useState(false);
  const page = useParams().page || "";
  return (
    <>
      <Navbar variant="dark" className="navbar-wrapper" expand="lg">
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
              <TextSliced title="EVENTS" />
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
              hidden={comingSoon || true}
              to={`/login`}
              isActive={() => page === "login"}
              className="header-title">
              <TextSliced title="LOGIN" />
            </NavLink>
          </Nav>
          <a href="https://www.ieee.org" target="_blank" rel="noreferrer">
            <img
              src={IEEELOGO}
              alt="iEEElogo"
              srcset=""
              className="nav-logo me-3 ms-5"
            />
          </a>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
