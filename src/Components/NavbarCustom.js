import React, { useEffect, useState } from "react";
import { Card, Modal, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { API } from "../axios/API";
import "../CSS/navbar.css";
import IEEELOGO from "../images/ieeelogo.png";
import PISBLOGO from "../images/pisb.png";
import CartIcon from "../images/shopping-cart.png";
import RCLogo from "../images/rc.png";
import TextSliced from "./TextSliced";
const NavbarCustom = (props) => {
  const [page, setPage] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [userDetails, setUserDetails] = useState({});
  const [paymentDone, setPaymentDone] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [show, setShow] = useState(false);

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

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Navbar
        variant="dark"
        className={
          props.relative
            ? "navbar-wrapper position-relative bg-color-custom"
            : "navbar-wrapper bg-color-custom"
        }
        expand="md">
        <Navbar.Brand
          href="https://pictieee.in"
          target="_blank"
          className="header-header">
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
              }}>
              <TextSliced title="Home" activeLink={page === ""} />
            </NavLink>
            <NavLink
              // hidden={comingSoon || true}
              to={`/events`}
              isActive={() => page === "events"}
              className="header-title"
              onClick={() => {
                setPage("events");
              }}>
              <TextSliced title="Events" activeLink={page === "events"} />
            </NavLink>
            <NavLink
              to={`/about`}
              isActive={() => page === "about"}
              className="header-title"
              onClick={() => {
                setPage("about");
              }}>
              <TextSliced title="About" activeLink={page === "about"} />
            </NavLink>
            <NavLink
              to={`/contact`}
              isActive={() => page === "contact"}
              className="header-title"
              onClick={() => {
                setPage("contact");
              }}>
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
              hidden={isLoggedIn ? (!paymentDone ? false : true) : false}>
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
              hidden={!isLoggedIn}>
              <TextSliced title="Logout" activeLink={page === "logout"} />
            </NavLink>
            {isLoggedIn && (
              <div className="cartIconContainer" onClick={handleShow}>
                <img src={CartIcon} alt="Cart icon" className="cartIcon" />
              </div>
            )}
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
      <Modal show={show} onHide={handleClose} className="cartModal" scrollable>
        <Modal.Header className="cartHeader">
          <Modal.Title className="cartTitle">Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="cartBody">
          <Card className="event-card">
            <Card.Body className="d-flex row card-body">
              <div className="col-md-3 d-flex justify-content-center">
                <img src={RCLogo} alt="Event logo" className="event-logo" />
              </div>
              <div
                className="col-md-6 d-flex justify-content-start"
                style={{ flexDirection: "column" }}>
                <h3>Reverse Coding</h3>
                <p>
                  Hone your problem-solving skills by decrypting complex
                  questions
                </p>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <h3>&#8377; 50</h3>
              </div>
            </Card.Body>
          </Card>
          <Card className="event-card">
            <Card.Body className="d-flex row card-body">
              <div className="col-md-3 d-flex justify-content-center">
                <img src={RCLogo} alt="Event logo" className="event-logo" />
              </div>
              <div
                className="col-md-6 d-flex justify-content-start"
                style={{ flexDirection: "column" }}>
                <h3>Reverse Coding</h3>
                <p>
                  Hone your problem-solving skills by decrypting complex
                  questions
                </p>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <h3>&#8377; 50</h3>
              </div>
            </Card.Body>
          </Card>
          <Card className="event-card">
            <Card.Body className="d-flex row card-body">
              <div className="col-md-3 d-flex justify-content-center">
                <img src={RCLogo} alt="Event logo" className="event-logo" />
              </div>
              <div
                className="col-md-6 d-flex justify-content-start"
                style={{ flexDirection: "column" }}>
                <h3>Reverse Coding</h3>
                <p>
                  Hone your problem-solving skills by decrypting complex
                  questions
                </p>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <h3>&#8377; 50</h3>
              </div>
            </Card.Body>
          </Card>
          <Card className="event-card">
            <Card.Body className="d-flex row card-body">
              <div className="col-md-3 d-flex justify-content-center">
                <img src={RCLogo} alt="Event logo" className="event-logo" />
              </div>
              <div
                className="col-md-6 d-flex justify-content-start"
                style={{ flexDirection: "column" }}>
                <h3>Reverse Coding</h3>
                <p>
                  Hone your problem-solving skills by decrypting complex
                  questions
                </p>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <h3>&#8377; 50</h3>
              </div>
            </Card.Body>
          </Card>
          <Card className="event-card">
            <Card.Body className="d-flex row card-body">
              <div className="col-md-3 d-flex justify-content-center">
                <img src={RCLogo} alt="Event logo" className="event-logo" />
              </div>
              <div
                className="col-md-6 d-flex justify-content-start"
                style={{ flexDirection: "column" }}>
                <h3>Reverse Coding</h3>
                <p>
                  Hone your problem-solving skills by decrypting complex
                  questions
                </p>
              </div>
              <div className="col-md-3 d-flex justify-content-center align-items-center">
                <h3>&#8377; 50</h3>
              </div>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer className="cartFooter">
          <div style={{ width: "100%" }}>
            <p
              style={{
                color: "#fff",
                float: "right",
                fontSize: 25,
                marginRight: 20,
              }}>
              Total : &#8377; 200
            </p>
          </div>
          <div className="row d-flex justify-content-between w-100">
            <button
              onClick={() => {
                setShow(false);
              }}
              className="play-btn play-btn--light">
              <span className="play-btn__inner">
                <span className="play-btn__slide"></span>
                <span className="play-btn__content">Close</span>
              </span>
            </button>
            <button
              onClick={() => {
                setShow(false);
              }}
              className="play-btn play-btn--light">
              <span className="play-btn__inner play-btn__inner-green">
                <span className="play-btn__slide play-btn__slide-green"></span>
                <span className="play-btn__content">Pay Now</span>
              </span>
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavbarCustom;
