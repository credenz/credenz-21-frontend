import React, { useContext, useEffect, useState } from "react";
import { Image, Modal, Tab, Tabs } from "react-bootstrap";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import swal from "sweetalert";
import { API } from "../axios/API";
import CartContext from "../Components/CartContext";
import EventCard2 from "../Components/EventCard2";
import Loader from "../Components/Loader";
import "../CSS/events.css";
import "../CSS/playButton.css";
import BPlan from "../images/bplan.png";
import Clash from "../images/clash.png";
import Cross from "../images/close-line.png";
import Cretronix from "../images/cretronix.png";
import Datawiz from "../images/datawiz.png";
import Enigma from "../images/enigma.png";
import NTH from "../images/nth.png";
import CredenzLogo from "../images/onlyLogo.png";
import CredenzLogoCombined from "../images/event_logo_white.png";
import Paper from "../images/paper.png";
import Pixelate from "../images/pixelate.png";
import Quiz from "../images/quiz.png";
import RC from "../images/rc.png";
import Wallstreet from "../images/wallstreet.png";
import Webweaver from "../images/web.png";
import {
  cartItems,
  eventDetails,
  events,
  eventsFull,
  allEventsForPass,
} from "../staticInfo.js";
// import GridBg from "../vid/mesh.webm";

const Logo = () => {
  return (
    <div className="row" style={{ height: "100%" }}>
      <div
        className="col-md-4 d-flex justify-content-end align-items-center"
        style={{ height: "100%" }}
      >
        <Image src={CredenzLogo} className="logo-events" />
      </div>
      <div
        className="col-md-8 d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <p className="credenz-text-main">CREDENZ 21-22</p>
      </div>
    </div>
  );
};

const LogoCombined = () => {
  return (
    <div className="row" style={{ height: "100%" }}>
      <div
        className="col-md-12 d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <Image src={CredenzLogoCombined} style={{ height: "100%" }} />
      </div>
    </div>
  );
};

const Events = () => {
  const cartContextValue = useContext(CartContext);
  const [cart, setCart] = useState([]);
  const [profileDetails, setProfileDetails] = useState({
    registeredEvents: [],
  });
  const ptop = "50px";
  const height = "65px";
  const width = "65px";
  const [active, setActive] = useState(-1);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [bgColor, setBgColor] = useState(0);

  const fetchProfile = async () => {
    let token = localStorage.getItem("credenz_access_token");
    let username = localStorage.getItem("credenz_username");
    if (token) {
      API.getUserDetails(username)
        .then((res) => {
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
        });
      API.getProfile(token)
        .then((res) => {
          if (res.data.payment === "PO") {
            setProfileDetails({
              userName: res.data?.username,
              email: res.data?.email,
              contact: res.data?.phone_no,
              senior: res.data?.senior,
              is_pass: res.data?.is_pass,
              institute: res.data?.institute,
              payment: res.data?.payment,
              registeredEvents: [],
            });
          } else if (res.data.payment === "CO" && res.data.is_pass === false) {
            setProfileDetails({
              userName: res.data?.username,
              email: res.data?.email,
              contact: res.data?.phone_no,
              senior: res.data?.senior,
              is_pass: res.data?.is_pass,
              institute: res.data?.institute,
              payment: res.data?.payment,
              registeredEvents: res.data.events,
            });
          } else {
            setProfileDetails({
              userName: res.data?.username,
              email: res.data?.email,
              contact: res.data?.phone_no,
              senior: res.data?.senior,
              is_pass: res.data?.is_pass,
              institute: res.data?.institute,
              payment: res.data?.payment,
              registeredEvents: allEventsForPass,
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setIsLoggedIn(false);
    }
  };

  const titleHelpr = (e) => {
    if (e === "RC") {
      return "Reverse Coding";
    } else if (e === "Paper") {
      return "Paper Presentation";
    } else return e;
  };

  function cartHelpr(eventCode) {
    switch (eventCode) {
      case 0:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[0]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[0]])
        );
        break;
      case 1:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[1]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[1]])
        );
        break;
      case 2:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[2]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[2]])
        );
        break;
      case 3:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[3]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[3]])
        );
        break;
      case 4:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[4]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[4]])
        );
        break;
      case 5:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[5]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[5]])
        );
        break;
      case 6:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[6]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[6]])
        );
        break;
      case 7:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[7]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[7]])
        );
        break;
      case 8:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[8]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[8]])
        );
        break;
      case 9:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[9]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[9]])
        );
        break;
      case 10:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[10]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[10]])
        );
        break;
      case 11:
        cartContextValue.setCart([...cartContextValue.cart, cartItems[11]]);
        localStorage.setItem(
          "cart",
          JSON.stringify([...cartContextValue.cart, cartItems[11]])
        );
        break;
      default:
        break;
    }
  }

  function PlayButton(props) {
    return (
      <div className="play-btn-wrapper">
        <button
          onClick={() => {
            if (!isLoggedIn) {
              //proceed to cart -> open cart modal
              swal(`You need to login first!`, "", "warning");
            } else {
              cartHelpr(props.eventSelected);
              setCart([...cart, cartItems[props.eventSelected]]);
              swal(`Event added successfully!`, "", "success");
            }
          }}
          disabled={
            cartContextValue.cart
              .map((item) => item.name)
              .includes(events[props.eventSelected])
              ? true
              : profileDetails.is_pass === true
              ? true
              : profileDetails.registeredEvents
                  .map((event) => event.name)
                  .includes(eventsFull[props.eventSelected])
              ? true
              : cartContextValue.cart.length > 0 &&
                cartContextValue.cart[0].name === "Pass"
              ? true
              : false
          }
          className="play-btn play-btn--light"
        >
          <span
            style={{
              backgroundColor:
                cartContextValue.cart
                  .map((item) => item.name)
                  .includes(events[props.eventSelected]) ||
                (cartContextValue.cart.length > 0 &&
                  cartContextValue.cart[0].name === "Pass")
                  ? "#e01949"
                  : profileDetails.is_pass === true
                  ? "#e01949"
                  : profileDetails.registeredEvents
                      .map((event) => event.name)
                      .includes(eventsFull[props.eventSelected])
                  ? "#e01949"
                  : "transparent",
            }}
            className="play-btn__inner"
          >
            <span className="play-btn__slide"></span>
            <span className="play-btn__content">
              {cartContextValue.cart
                .map((item) => item.name)
                .includes(events[props.eventSelected]) ||
              (cartContextValue.cart.length > 0 &&
                cartContextValue.cart[0].name === "Pass")
                ? "Added to cart"
                : profileDetails.is_pass === true
                ? "Already Registered"
                : profileDetails.registeredEvents
                    .map((event) => event.name)
                    .includes(eventsFull[props.eventSelected])
                ? "Already Registered"
                : "Add to Cart"}
            </span>
          </span>
        </button>
      </div>
    );
  }
  function SubmitButton(props) {
    return (
      <div className="play-btn-wrapper">
        <button
          className="play-btn play-btn--light"
          onClick={() => {
            if (!isLoggedIn) {
              //proceed to cart -> open cart modal
              swal(`You need to login first!`, "", "warning");
            } else {
              cartContextValue.setCartModal(!cartContextValue.cartModal);
              // cartHelpr(props.eventSelected);
              // setCart([...cart, cartItems[props.eventSelected]]);
              // swal(`Event added successfully!`, "", "success");
            }
          }}
        >
          <span className="play-btn__inner play-btn__inner-green">
            <span className="play-btn__slide play-btn__slide-green"></span>
            <span className="play-btn__content">Checkout</span>
          </span>
        </button>
      </div>
    );
  }

  const [eventSelected, setEventSelected] = useState(-1);
  const [mainText, setMainText] = useState(eventDetails[0].info);
  const [mainHeading, setMainHeading] = useState(titleHelpr(events[0]));
  const [loading, setLoading] = useState(false);

  const iconHelpr = (e) => {
    if (e === "RC") {
      return RC;
    } else if (e === "Clash") {
      return Clash;
    } else if (e === "NTH") {
      return NTH;
    } else if (e === "Wallstreet") {
      return Wallstreet;
    } else if (e === "BPlan") {
      return BPlan;
    } else if (e === "Enigma") {
      return Enigma;
    } else if (e === "Datawiz") {
      return Datawiz;
    } else if (e === "Quiz") {
      return Quiz;
    } else if (e === "Paper") {
      return Paper;
    } else if (e === "Cretronix") {
      return Cretronix;
    } else if (e === "Pixelate") {
      return Pixelate;
    } else if (e === "Webweaver") {
      return Webweaver;
    }
  };

  const fetchLocalEvents = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart !== null) {
      cartContextValue.setCart(cart);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProfile();
    fetchLocalEvents();
    setActive(-1);
    setTimeout(() => {
      setLoading(false);
    }, 900);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateHorizontal = (event) => {};

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center styleLoader">
          <Loader />
        </div>
      ) : (
        <>
          {/* <NavbarCustom /> */}
          <div className="bg-dark section-events height-full o-x-hide-events">
            {/* <div className="video-container-events">
            <video className={"events-video fade-in-image"} autoPlay loop muted>
              <source src={GridBg} type="video/webm" />
            </video>
          </div> */}
            {/* <NavbarCustom relative /> */}
            {/* NEW GRID */}
            <div
              className="row ms-3 me-3 cards-wrapper"
              data-aos="fade-in"
              data-aos-duration="400"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50"
            >
              <div className="col-md-3 ">
                <div className="row">
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(0);
                      setMainHeading(titleHelpr(events[0]));
                      setMainText(eventDetails[0].info);
                      setEventSelected(0);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={RC}
                      width={width}
                      height={height}
                      title="Reverse Coding"
                      text="Hone your problem-solving skills by decrypting complex questions"
                      active={
                        0 === active || 0 === eventSelected ? true : false
                      }
                      bgColor={0 === bgColor ? true : false}
                    />
                  </div>
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(1);
                      setMainHeading(titleHelpr(events[1]));
                      setMainText(eventDetails[1].info);
                      setEventSelected(1);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={Clash}
                      width={width}
                      height={height}
                      title="Clash"
                      text="Clash is based on Competitive Programming!"
                      active={
                        1 === active || 1 === eventSelected ? true : false
                      }
                      bgColor={1 === bgColor ? true : false}
                    />
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(2);
                      setMainHeading(titleHelpr(events[2]));
                      setMainText(eventDetails[2].info);
                      setEventSelected(2);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={NTH}
                      width={width}
                      height={height}
                      title="NTH"
                      text="Decrypt the clues to solve complex puzzles and race your way to finish at top!"
                      active={
                        2 === active || 2 === eventSelected ? true : false
                      }
                      bgColor={2 === bgColor ? true : false}
                    />
                  </div>
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(3);
                      setMainHeading(titleHelpr(events[3]));
                      setMainText(eventDetails[3].info);
                      setEventSelected(3);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={Wallstreet}
                      width={"50px"}
                      height={"50px"}
                      title="WallStreet"
                      marginBottomImg="10%"
                      text="Get an insight on stock markets by Investing and trading virtual money!"
                      active={
                        3 === active || 3 === eventSelected ? true : false
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(4);
                      setMainHeading(titleHelpr(events[4]));
                      setMainText(eventDetails[4].info);
                      setEventSelected(4);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={BPlan}
                      width={"90px"}
                      height={"90px"}
                      title="B-Plan"
                      text="Showcase your entrepreneurial skills by presenting innovative business plans to the world!"
                      active={
                        4 === active || 4 === eventSelected ? true : false
                      }
                    />
                  </div>
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(5);
                      setMainHeading(titleHelpr(events[5]));
                      setMainText(eventDetails[5].info);
                      setEventSelected(5);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={Enigma}
                      width={width}
                      height={height}
                      title="Enigma"
                      text="Get ready to push your aptitude, logical reasoning skills limits by solving mind-boggling questions!"
                      active={
                        5 === active || 5 === eventSelected ? true : false
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 ">
                <div
                  className="row justify-content-center"
                  style={{ height: "50%" }}
                >
                  <div className="main-wrapper">
                    {eventSelected === -1 ? (
                      <LogoCombined />
                    ) : (
                      <>
                        <div className="main-heading">{mainHeading}</div>
                        <div className="main-text">{mainText}</div>
                      </>
                    )}
                  </div>
                </div>

                <div className="row hide-mobile">
                  {eventSelected === -1 ? null : (
                    <div className="row">
                      <div className="col-md-6">
                        <PlayButton link="#" eventSelected={eventSelected} />
                      </div>
                      <div className="col-md-6">
                        <SubmitButton eventSelected={eventSelected} />
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className={`d-flex justify-content-center row tab-group ${
                    eventSelected === -1 ? "d-none" : ""
                  }`}
                  style={{ height: "50%", paddingTop: { ptop } }}
                >
                  <div
                    className={`d-flex justify-content-center row tab-group ${
                      eventSelected === -1 ? "d-none" : ""
                    }`}
                    style={{ height: "50%", paddingTop: { ptop } }}
                  >
                    <div
                      className="d-flex row justify-content-center"
                      style={{ height: "40%" }}
                    >
                      <div className="col-md-4 mb-2 d-flex justify-content-center">
                        <div
                          className={`tabButton d-flex justify-content-center align-items-center ${
                            activeTab === 0 ? "activeTab" : ""
                          } `}
                          color="warning"
                          onClick={() => {
                            if (eventSelected !== -1) {
                              setMainText(eventDetails[eventSelected].info);
                              setActiveTab(0);
                            }
                          }}
                          onKeyPress={(e) => navigateHorizontal(e)}
                        >
                          Info
                        </div>
                      </div>
                      <div className="col-md-4 mb-2 d-flex justify-content-center">
                        <div
                          className={`tabButton d-flex justify-content-center align-items-center ${
                            activeTab === 1 ? "activeTab" : ""
                          } `}
                          color="warning"
                          onClick={() => {
                            if (eventSelected !== -1) {
                              setMainText(eventDetails[eventSelected].rules);
                              setActiveTab(1);
                            }
                          }}
                        >
                          Rules
                        </div>
                      </div>
                      <div className="col-md-4 mb-2 d-flex justify-content-center">
                        <div
                          className={`tabButton d-flex justify-content-center align-items-center ${
                            activeTab === 2 ? "activeTab" : ""
                          } `}
                          color="warning"
                          onClick={() => {
                            if (eventSelected !== -1) {
                              setMainText(
                                eventDetails[eventSelected].structure
                              );
                              setActiveTab(2);
                            }
                          }}
                        >
                          Structure
                        </div>
                      </div>
                      <div className="mt-4 col-md-4 mb-2 d-flex justify-content-center">
                        <div
                          className={`tabButton d-flex justify-content-center align-items-center ${
                            activeTab === 3 ? "activeTab" : ""
                          } `}
                          color="warning"
                          onClick={() => {
                            if (eventSelected !== -1) {
                              setMainText(eventDetails[eventSelected].judging);
                              setActiveTab(3);
                            }
                          }}
                        >
                          Judging Criteria
                        </div>
                      </div>
                      <div className="mt-4 col-md-4 mb-2 d-flex justify-content-center">
                        <div
                          className={`tabButton d-flex justify-content-center align-items-center ${
                            activeTab === 4 ? "activeTab" : ""
                          } `}
                          color="warning"
                          onClick={() => {
                            if (eventSelected !== -1) {
                              setMainText(eventDetails[eventSelected].contact);
                              setActiveTab(4);
                            }
                          }}
                        >
                          Contact
                        </div>
                      </div>
                    </div>
                    <div
                      className="row justify-content-center"
                      style={{ height: "40%" }}
                    >
                      <div className="col-md-12 d-flex justify-content-center">
                        <div className="rectangle d-none"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 ">
                <div className="row">
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(6);
                      setMainHeading(titleHelpr(events[6]));
                      setMainText(eventDetails[6].info);
                      setEventSelected(6);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={Datawiz}
                      width={"50px"}
                      height={"50px"}
                      title="Datawiz"
                      text="Test your Machine learning and data analytics skills before stepping into the world of Data Science!"
                      active={
                        6 === active || 6 === eventSelected ? true : false
                      }
                    />
                  </div>
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(7);
                      setMainHeading(titleHelpr(events[7]));
                      setMainText(eventDetails[7].info);
                      setEventSelected(7);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={Quiz}
                      width={width}
                      height={height}
                      title="Quiz"
                      text="Test your knowledge across wide range of topics and get a chance to win some exciting prizes!"
                      active={
                        7 === active || 7 === eventSelected ? true : false
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(8);
                      setMainHeading(titleHelpr(events[8]));
                      setMainText(eventDetails[8].info);
                      setEventSelected(8);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={Paper}
                      width={width}
                      height={height}
                      title="Paper Presentation"
                      text="Present technical research papers with advanced perspectives while honing your skills of research!"
                      active={
                        8 === active || 8 === eventSelected ? true : false
                      }
                    />
                  </div>
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(9);
                      setMainHeading(titleHelpr(events[9]));
                      setMainText(eventDetails[9].info);
                      setEventSelected(9);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={Cretronix}
                      width={width}
                      height={height}
                      title="Cretronix"
                      text="Build and exhibit your own circuits by solving tech problems!"
                      active={
                        9 === active || 9 === eventSelected ? true : false
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(10);
                      setMainHeading(titleHelpr(events[10]));
                      setMainText(eventDetails[10].info);
                      setEventSelected(10);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={Pixelate}
                      width={width}
                      height={height}
                      title="Pixelate"
                      text="Let your creativity fuse with thoughtful designs and artistic originality!"
                      active={
                        10 === active || 10 === eventSelected ? true : false
                      }
                    />
                  </div>
                  <div
                    className="col-6"
                    onClick={() => {
                      setActive(11);
                      setMainHeading(titleHelpr(events[11]));
                      setMainText(eventDetails[11].info);
                      setEventSelected(11);
                      if (window.innerWidth <= 768) {
                        setShow(true);
                      }
                      setActiveTab(0);
                    }}
                  >
                    <EventCard2
                      icon={Webweaver}
                      width={width}
                      height={height}
                      title="Webweaver"
                      text="Build an aesthetic website to showcase your web development skills!"
                      active={
                        11 === active || 11 === eventSelected ? true : false
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <Modal
              style={{ zIndex: 1000 }}
              centered
              className="d-lg-none"
              backdrop="static"
              show={show}
              onHide={() => {
                setShow(false);
              }}
              size="lg"
            >
              <Modal.Header style={{ width: "90%" }}>
                <Modal.Title
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <img
                    className="modal-logo-img"
                    src={iconHelpr(events[active])}
                    alt="Event Icon"
                    style={{
                      color: "white",
                      width: "5rem",
                    }}
                  />
                  <div className="modal-icon-text">
                    {titleHelpr(events[active])}
                  </div>
                  <div
                    className="modal-close-wrapper"
                    onClick={() => setShow(false)}
                  >
                    <img
                      src={Cross}
                      alt="close button"
                      className="modal-close-btn"
                    />
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Tabs defaultActiveKey="info" className="mb-3">
                  <Tab
                    eventKey="info"
                    title="Info"
                    className="modal-tab-link"
                    color="#efefef"
                  >
                    <div className="info-wrapper">
                      <p className="new-line">
                        {eventSelected !== -1 &&
                          eventDetails[eventSelected].info}
                      </p>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="rules"
                    title="Rules"
                    className="modal-tab-link"
                  >
                    <div className="info-wrapper">
                      <p className="new-line">
                        {eventSelected !== -1 &&
                          eventDetails[eventSelected].rules}
                      </p>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="structure"
                    title="Structure"
                    className="modal-tab-link"
                  >
                    <div className="info-wrapper">
                      <p className="new-line">
                        {eventSelected !== -1 &&
                          eventDetails[eventSelected].structure}
                      </p>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="judge"
                    title="Judging"
                    className="modal-tab-link"
                  >
                    <div className="info-wrapper">
                      <p className="new-line">
                        {eventSelected !== -1 &&
                          eventDetails[eventSelected].judging}
                      </p>
                    </div>
                  </Tab>
                  <Tab
                    eventKey="contact"
                    title="Contact"
                    className="modal-tab-link"
                  >
                    <div className="info-wrapper">
                      <p className="new-line">
                        {eventSelected !== -1 &&
                          eventDetails[eventSelected].contact}
                      </p>
                    </div>
                  </Tab>
                </Tabs>
                <div className="play-button-modal">
                  <PlayButton link="#" eventSelected={eventSelected} />
                </div>
              </Modal.Body>
            </Modal>
          </div>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default Events;
