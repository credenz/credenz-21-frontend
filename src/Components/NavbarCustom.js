import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import TextSliced from "./TextSliced";
import PISBLOGO from "../images/pisb.png";
import IEEELOGO from "../images/ieeelogo.png";
import "../CSS/navbar.css";
const NavbarCustom = () => {
  const page = useParams().page || "home";
  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbar-wrapper" expand="lg">
        <Container className="ps-4">
          <Navbar.Brand href="/home" className="header-header">
            <img src={PISBLOGO} alt="pisblogo" />
          </Navbar.Brand>
        </Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="s-auto">
            <NavLink
              to={`/home`}
              isActive={() => page === "home"}
              className="header-title"
            >
              <TextSliced title="HOME" />
            </NavLink>
            <NavLink
              to={`/events`}
              isActive={() => page === "events"}
              className="header-title"
            >
              <TextSliced title="EVENTS" />
            </NavLink>
            <NavLink
              to={`/about`}
              isActive={() => page === "about"}
              className="header-title"
            >
              <TextSliced title="ABOUT" />
            </NavLink>
            <NavLink
              to={`/contact`}
              isActive={() => page === "contact"}
              className="header-title"
            >
              <TextSliced title="CONTACT" />
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
              className="header-title"
            >
              <TextSliced title="LOGIN" />
            </NavLink>
          </Nav>
          <Container>
            <img src={IEEELOGO} alt="iEEElogo" srcset="" />
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
