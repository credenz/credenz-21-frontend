import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useParams, NavLink } from "react-router-dom";
import "../CSS/navbar.css";
const NavbarCustom = () => {
  const page = useParams().page || "home";
  console.log("inside nav:", page);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="/home" className="header-header">
            CREDENZ
          </Navbar.Brand>
          <Nav className="s-auto">
            <NavLink
              to={`/home`}
              isActive={() => page === "home"}
              className="header-title"
            >
              HOME
            </NavLink>
            <NavLink
              to={`/events`}
              isActive={() => page === "events"}
              className="header-title"
            >
              EVENTS
            </NavLink>
            <NavLink
              to={`/about`}
              isActive={() => page === "about"}
              className="header-title"
            >
              ABOUT
            </NavLink>
            <NavLink
              to={`/contact`}
              isActive={() => page === "contact"}
              className="header-title"
            >
              CONTACT
            </NavLink>
            <NavLink
              to={`/profile`}
              isActive={() => page === "profile"}
              className="header-title"
            >
              PROFILE
            </NavLink>
            <NavLink
              to={`/login`}
              isActive={() => page === "login"}
              className="header-title"
            >
              LOGIN
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarCustom;
