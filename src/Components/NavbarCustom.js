import React, { useContext, useEffect, useState } from "react";
import { Card, Modal, Nav, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import swal from "sweetalert";
import { API } from "../axios/API";
import "../CSS/navbar.css";
import DownArrow from "../images/arrow-down-sign-to-navigate.png";
import deleteIcon from "../images/bin.png";
import BPlan from "../images/bplan.png";
import Clash from "../images/clash.png";
import Cretronix from "../images/cretronix.png";
import Datawiz from "../images/datawiz.png";
import Enigma from "../images/enigma.png";
import IEEELOGO from "../images/ieeelogo.png";
import CredenzLogo from "../images/logo_final.jpg";
import NTH from "../images/nth.png";
import Paper from "../images/paper.png";
import PISBLOGO from "../images/pisb.png";
import Pixelate from "../images/pixelate.png";
import Quiz from "../images/quiz.png";
import RC from "../images/rc.png";
import CartIcon from "../images/shopping-cart.png";
import ProfileIcon from "../images/user.png";
import Wallstreet from "../images/wallstreet.png";
import Webweaver from "../images/web.png";
import CartContext from "./CartContext";

const NavbarCustom = (props) => {
  const location = useLocation();
  const [page, setPage] = useState("/");
  const cartContextValue = useContext(CartContext);
  // eslint-disable-next-line no-unused-vars
  const [userDetails, setUserDetails] = useState({});
  const [profileDetails, setProfileDetails] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const iconHelpr = (name) => {
    switch (name) {
      case "RC":
        return RC;
      case "BPlan":
        return BPlan;
      case "Clash":
        return Clash;
      case "Cretronix":
        return Cretronix;
      case "Datawiz":
        return Datawiz;
      case "Enigma":
        return Enigma;
      case "NTH":
        return NTH;
      case "Paper":
        return Paper;
      case "Pixelate":
        return Pixelate;
      case "Quiz":
        return Quiz;
      case "Wallstreet":
        return Wallstreet;
      case "Webweaver":
        return Webweaver;
      default:
        return CredenzLogo;
    }
  };

  const checkLoggedIn = () => {
    let token = localStorage.getItem("credenz_access_token");
    let username = localStorage.getItem("credenz_username");
    if (token) {
      API.getUserDetails(username)
        .then((res) => {
          setUserDetails({ ...res.data, username: username });
          // fetchUserDetails(res.data.user_id);
          cartContextValue.setIsLoggedIn(true);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          swal("Invalid token, please log out and sign in again");
          console.error(err);
        });
      API.getProfile(token)
        .then((res) => {
          const data = { events: [], ...res.data };
          setProfileDetails(data);
          cartContextValue.setUserProfile(data);
        })
        .catch((err) => {
          swal("Invalid token, please log out and sign in again");
          console.error(err);
        });
    } else {
      // cartContextValue.setUserProfile(res.data);
      cartContextValue.setIsLoggedIn(false);
    }
  };

  const EventNameHelpr = (event) => {
    switch (event) {
      case "RC":
        return "Reverse Coding";
      case "BPlan":
        return "Business Plan";
      case "Clash":
        return "Clash";
      case "Cretronix":
        return "Cretronix";
      case "Datawiz":
        return "Datawiz";
      case "Enigma":
        return "Enigma";
      case "NTH":
        return "Network Treasure Hunt";
      case "Paper":
        return "Paper Presentation";
      case "Pixelate":
        return "Pixelate";
      case "Quiz":
        return "Quiz";
      case "Wallstreet":
        return "Wallstreet";
      case "Webweaver":
        return "Webweaver";
      default:
        break;
    }
  };

  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      API.verifyPayment(bodyData)
        .then((res) => {
          //RESET THE LOCAL STATE
          //   history.push("/", { userDetails });
          swal("Payment Successful", "", "success");
          cartContextValue.setCart([]);
        })
        .catch((err) => {
          swal("Payment Failed", "", "error");
        });
    } catch (error) {}
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      // alert("Razorpay SDK failed to load. Are you online?");
      swal("Razorpay SDK failed to load. Are you online?", "", "error");
      return;
    }

    try {
      let { data: orderData } = await API.payment({
        username: userDetails.username,
        amount: cartContextValue.cart
          .map((item) => item.price)
          .reduce((a, b) => a + b, 0),
        pass: cartContextValue.cart.length === 0 ? true : false,
        events: cartContextValue.cart.map((item) => EventNameHelpr(item.name)),
      });
      const options = {
        key: "rzp_live_jwcNMaBQ5tVXKC", // Enter the Key ID generated from the Dashboard
        amount: orderData.payment.amount_due.toString(),
        currency: orderData.payment.currency,
        name: "Credenz 21-22",
        description: "Event registration payment",
        order_id: orderData.payment.id,
        handler: async function (response) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: userDetails.username || "",
          email: profileDetails.email || "",
          contact: userDetails.phone_no || "",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error", error);
    }
  };

  const displayRazorpayPass = async (props) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      // alert("Razorpay SDK failed to load. Are you online?");
      swal("Razorpay SDK failed to load. Are you online?", "", "error");
      return;
    }

    try {
      let { data: orderData } = await API.payment({
        username: userDetails.username,
        amount: userDetails?.ieee_member === true ? 200 : 250,
        pass: true,
        events: [],
      });
      const options = {
        key: "rzp_live_jwcNMaBQ5tVXKC", // Enter the Key ID generated from the Dashboard
        amount: orderData.payment.amount_due.toString(),
        currency: orderData.payment.currency,
        name: "Credenz Live 2.0 Payment",
        description: "Test Transaction",
        order_id: orderData.payment.id,
        handler: async function (response) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: userDetails.username || "",
          email: profileDetails.email || "",
          contact: userDetails.phone_no || "",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    checkLoggedIn();
    setPage(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowModal = () => cartContextValue.setCartModal(true);
  const handleCloseModal = () => cartContextValue.setCartModal(false);

  const handleShowMenu = () => setShowMenu(!showMenu);

  const deleteEventHandler = (name) => {
    let cartItems = cartContextValue.cart;
    cartItems = cartContextValue.cart.filter((item) => {
      return item.name !== name;
    });

    cartContextValue.setCart(cartItems);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const CartBody = (props) => {
    return (
      <Card className="event-card">
        <Card.Body className="d-flex row card-body">
          <div
            className="deleteIconContainer"
            onClick={() => deleteEventHandler(props.name)}
          >
            <img src={deleteIcon} alt="Delete icon" className="deleteIcon" />
          </div>
          <>
            <div className="col-md-3 d-flex justify-content-center">
              <img
                src={iconHelpr(props.name)}
                alt="Event logo"
                className="event-logo"
              />
            </div>
            <div
              className="col-md-6 d-flex justify-content-center"
              style={{ flexDirection: "column" }}
            >
              <h3>{props.name}</h3>
              <p>{props.tagline}</p>
            </div>
            <div className="col-md-3 d-flex justify-content-center align-items-center">
              <h3>&#8377; {props.price}</h3>
            </div>
          </>
        </Card.Body>
      </Card>
    );
  };

  const ProfileMenu = () => {
    return (
      <div className="menuPosition">
        <Card>
          <Card.Body style={{ backgroundColor: "#000" }}>
            <NavLink
              to="/profile"
              onClick={() => {
                setPage("");
                handleShowMenu();
              }}
              className="menu-item"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",
              }}
            >
              My Profile
            </NavLink>
            <div
              className="divider"
              style={{
                height: "1px",
                width: "100%",
                backgroundColor: "#fff",
                marginBottom: 10,
                marginTop: 10,
              }}
            />
            <NavLink
              to={`/`}
              className="menu-item"
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "#fff",
              }}
              onClick={() => {
                localStorage.removeItem("credenz_access_token");
                localStorage.removeItem("credenz_username");
                localStorage.removeItem("isLoggedIn");
                swal("Logged out successfully!", "", "success").then((val) => {
                  window.location.reload();
                });
              }}
            >
              Logout
            </NavLink>
          </Card.Body>
        </Card>
      </div>
    );
  };

  const defaultActive = () => {
    switch (page) {
      case "/":
        return "home";
      case "/profile":
        return "profile";
      case "/events":
        return "events";
      case "/about":
        return "about";
      case "/contact":
        return "contact";
      case "/login":
        return "login";
      default:
        return "home";
    }
  };

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
          <Nav
            className="s-auto"
            style={{ position: "relative" }}
            defaultActiveKey={"home"}
          >
            <NavLink
              key={"home"}
              activeClassName="activeLink"
              to={`/`}
              isActive={() => {
                return page === "/";
              }}
              className={`header-title ${page === "/" ? "activeLink" : ""}`}
              onClick={() => {
                setPage("/");
              }}
            >
              Home
            </NavLink>
            <NavLink
              key={"events"}
              activeClassName="activeLink"
              // hidden={comingSoon || true}
              to={`/events`}
              isActive={() => page === "/events"}
              className="header-title"
              onClick={() => {
                setPage("/events");
              }}
            >
              {/* <TextSliced title="Events" activeLink={page === "/events"} /> */}
              Events
            </NavLink>
            <NavLink
              key={"about"}
              activeClassName="activeLink"
              to={`/about`}
              isActive={() => page === "/about"}
              className="header-title"
              onClick={() => {
                setPage("/about");
              }}
            >
              About
            </NavLink>
            <NavLink
              key={"contact"}
              activeClassName="activeLink"
              to={`/contact`}
              isActive={() => page === "/contact"}
              className="header-title"
              onClick={() => {
                setPage("/contact");
              }}
            >
              Contact
            </NavLink>
            <NavLink
              key={"login"}
              activeClassName="activeLink"
              to={`/login`}
              isActive={() => page === "/login"}
              onClick={() => {
                setPage("/login");
              }}
              className="header-title"
              hidden={isLoggedIn ? true : false}
            >
              {/* <TextSliced
                title={isLoggedIn ? (!paymentDone ? "Pay Now" : "") : "Login"}
                activeLink={page === "/login"}
              /> */}
              Login
            </NavLink>
            {isLoggedIn && (
              <>
                <div
                  className="cartIconContainer m-10"
                  onClick={handleShowModal}
                >
                  {cartContextValue.cart.length > 0 && (
                    <div className="badgeContainer">
                      <p className="badge">{cartContextValue.cart.length}</p>
                    </div>
                  )}
                  <img src={CartIcon} alt="Cart icon" className="cartIcon" />
                </div>
              </>
            )}
            {isLoggedIn && (
              <>
                <div
                  className="d-flex align-items-center responsive-pos"
                  style={{ cursor: "pointer" }}
                  onClick={handleShowMenu}
                >
                  <div className="profileIconContainer">
                    <img
                      src={ProfileIcon}
                      alt="Profile icon"
                      className="profileIcon"
                    />
                  </div>
                  <div className="downArrowContainer">
                    <img
                      src={DownArrow}
                      alt="Down icon"
                      className="downArrow"
                    />
                  </div>
                </div>
                {showMenu && <ProfileMenu />}
              </>
            )}
          </Nav>
          <a
            href="https://www.ieee.org"
            target="_blank"
            rel="noreferrer"
            className="me-3 ms-5"
          >
            <img src={IEEELOGO} alt="iEEElogo" className="nav-logo logo-ieee" />
          </a>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        show={cartContextValue.cartModal}
        onHide={handleCloseModal}
        className="cartModal"
        scrollable
      >
        <Modal.Header className="cartHeader">
          <Modal.Title className="cartTitle">Checkout Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body className="cartBody">
          {cartContextValue?.cart.length > 0 ? (
            cartContextValue?.cart.map((item, i) => (
              <CartBody
                key={i}
                price={item.price}
                name={item.name}
                tagline={item.tagline}
              />
            ))
          ) : (
            <div className="d-flex justify-content-center align-items-center">
              <p style={{ color: "#fff", fontSize: 22 }}>No Items in Cart</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer className="cartFooter">
          {cartContextValue.cart.length > 0 ? (
            <div style={{ width: "100%" }}>
              <p
                style={{
                  color: "#fff",
                  float: "right",
                  fontSize: 25,
                  marginRight: 20,
                }}
              >
                Total : &#8377;
                {cartContextValue.cart
                  .map((item) => item.price)
                  .reduce((a, b) => a + b, 0)}
              </p>
            </div>
          ) : null}
          <div className="row d-flex justify-content-between w-100">
            <button
              onClick={() => {
                cartContextValue.setCartModal(false);
              }}
              className="play-btn play-btn--light"
            >
              <span className="play-btn__inner">
                <span className="play-btn__slide"></span>
                <span className="play-btn__content">Close</span>
              </span>
            </button>
            <button
              onClick={() => {
                const pass = {
                  name: "Pass",
                  price: 200,
                  tagline: "All events can be played with this pass",
                  isPass: true,
                };
                cartContextValue.setCart([pass]);
                localStorage.setItem("cart", JSON.stringify([pass]));
                // displayRazorpayPass();
              }}
              disabled={userDetails?.is_pass ? true : false}
              className="play-btn play-btn--light"
            >
              <span className="play-btn__inner">
                <span className="play-btn__slide"></span>
                <span className="play-btn__content">Buy Pass</span>
              </span>
            </button>
            <button
              onClick={() => {
                // cartContextValue.setCartModal(false);
                let cart = JSON.parse(localStorage.getItem("cart"));
                if (cart[0]?.isPass) {
                  displayRazorpayPass();
                } else {
                  displayRazorpay();
                }
              }}
              disabled={cartContextValue.cart.length > 0 ? false : true}
              className="play-btn play-btn--light"
              style={{}}
            >
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
