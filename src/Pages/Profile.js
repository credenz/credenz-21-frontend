import React, { useEffect, useState } from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";
import swal from "sweetalert";
import { API } from "../axios/API";
import EventCard3 from "../Components/EventCard3";
import Loader from "../Components/Loader";
import "../CSS/profile.css";
import BPlan from "../images/bplan.png";
import Clash from "../images/clash.png";
import Cross from "../images/close-line.png";
import Cretronix from "../images/cretronix.png";
import Datawiz from "../images/datawiz.png";
import EmailIcon from "../images/email.png";
import Enigma from "../images/enigma.png";
import NTH from "../images/nth.png";
import Paper from "../images/paper.png";
import CallIcon from "../images/phone-receiver-silhouette.png";
import Pixelate from "../images/pixelate.png";
import Quiz from "../images/quiz.png";
import RC from "../images/rc.png";
import SchoolIcon from "../images/school.png";
import Wallstreet from "../images/wallstreet.png";
import Webweaver from "../images/web.png";
import { eventDetails, events, eventsFull } from "../staticInfo";

const Profile = (props) => {
  const height = "65px";
  const width = "65px";
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(-1);
  const [eventSelected, setEventSelected] = useState(-1);
  const [profileDetails, setProfileDetails] = useState({
    email: "",
    contact: "",
    userName: "",
    is_pass: false,
    senior: false,
    institute: "",
    registeredEvents: [],
    payment: false,
  });

  const allEvents = [
    "Reverse Coding",
    "Clash",
    "Network Treasure Hunt",
    "Wallstreet",
    "B-Plan",
    "Enigma",
    "Datawiz",
    "Quiz",
    "Paper Presentation",
    "Cretronix",
    "Pixelate",
    "Web Weaver",
  ];

  const iconHelpr = (e) => {
    if (e === "Reverse Coding") {
      return RC;
    } else if (e === "Clash") {
      return Clash;
    } else if (e === "Network Treasure Hunt") {
      return NTH;
    } else if (e === "Wallstreet") {
      return Wallstreet;
    } else if (e === "B-Plan") {
      return BPlan;
    } else if (e === "Enigma") {
      return Enigma;
    } else if (e === "Datawiz") {
      return Datawiz;
    } else if (e === "Quiz") {
      return Quiz;
    } else if (e === "Paper Presentation") {
      return Paper;
    } else if (e === "Cretronix") {
      return Cretronix;
    } else if (e === "Pixelate") {
      return Pixelate;
    } else if (e === "Web Weaver") {
      return Webweaver;
    }
  };

  const titleHelpr = (e) => {
    if (e === "RC") {
      return "Reverse Coding";
    } else if (e === "Paper") {
      return "Paper Presentation";
    } else return e;
  };

  const eventHelper = (eventName) => {
    if (eventName === "Reverse Coding") {
      return 0;
    } else if (eventName === "Clash") {
      return 1;
    } else if (eventName === "Network Treasure Hunt") {
      return 2;
    } else if (eventName === "WallStreet") {
      return 3;
    } else if (eventName === "B-Plan") {
      return 4;
    } else if (eventName === "Enigma") {
      return 5;
    } else if (eventName === "Datawiz") {
      return 6;
    } else if (eventName === "Quiz") {
      return 7;
    } else if (eventName === "Paper Presentation") {
      return 8;
    } else if (eventName === "Cretronix") {
      return 9;
    } else if (eventName === "Pixelate") {
      return 10;
    } else if (eventName === "Web Weaver") {
      return 11;
    }
  };

  const fetchProfileDetails = async () => {
    let token = localStorage.getItem("credenz_access_token");
    setLoading(true);
    if (token) {
      await API.getProfile(token)
        .then((res) => {
          if (res.data.payment === "CO") {
            setProfileDetails({
              ...profileDetails,
              userName: res.data?.username,
              email: res.data?.email,
              contact: res.data?.phone_no,
              senior: res.data?.senior,
              is_pass: res.data?.is_pass,
              institute: res.data?.institute,
              payment: res.data?.payment,
              registeredEvents: allEvents,
            });
          } else {
            setProfileDetails({
              ...profileDetails,
              userName: res.data?.username,
              email: res.data?.email,
              contact: res.data?.phone_no,
              senior: res.data?.senior,
              is_pass: res.data?.is_pass,
              institute: res.data?.institute,
              payment: res.data?.payment,
              registeredEvents: [],
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
      setLoading(false);
    } else {
      swal("Not authenticated!", "", "error");
    }
  };

  useEffect(() => {
    setLoading(true);
    // fetchPaymentDetails();
    fetchProfileDetails();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  // }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center styleLoader">
          <Loader />
        </div>
      ) : (
        <>
          <div className="bg-dark2">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4">
                  <div className="personalCardContainer">
                    <div className="personalCard">
                      <div className="userContainer my-5 flex-column d-flex justify-content-center align-items-center">
                        <div className="imgContainer">
                          <div className="initials">
                            {profileDetails.userName[0].toUpperCase()}
                          </div>
                        </div>
                        <div className="userName mt-4">
                          {profileDetails.userName}
                        </div>
                      </div>
                      <div className="itemContainer">
                        <div className="itemRow">
                          <img
                            src={EmailIcon}
                            alt="Email icon"
                            style={{ marginRight: 10 }}
                            className="commonIcon"
                          />
                          <p className="detailText" style={{ margin: 0 }}>
                            {profileDetails.email}
                          </p>
                        </div>
                        <div className="itemRow">
                          <img
                            src={CallIcon}
                            alt="Call icon"
                            style={{ marginRight: 10 }}
                            className="commonIcon"
                          />
                          <p className="detailText" style={{ margin: 0 }}>
                            {profileDetails.contact}
                          </p>
                        </div>
                        <div className="itemRow">
                          <img
                            src={SchoolIcon}
                            alt="School icon"
                            style={{ marginRight: 10 }}
                            className="commonIcon"
                          />
                          <p className="detailText" style={{ margin: 0 }}>
                            {profileDetails.institute}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8">
                  <div className="heading">
                    <h2>My Events</h2>
                  </div>
                  {profileDetails.payment === "CO" ? (
                    profileDetails?.is_pass === true ? (
                      <div className="secondContainer">
                        <div className="row d-flex flex-row justify-content-evenly flex-wrap">
                          {allEvents.length > 0 &&
                            allEvents.map((col, i) => (
                              <span
                                key={i}
                                className="d-flex justify-content-center"
                                style={{ width: "200px" }}
                                onClick={() => {
                                  setActive(eventHelper(col));
                                  setEventSelected(eventHelper(col));
                                  setShow(true);
                                }}
                              >
                                <EventCard3
                                  icon={iconHelpr(col)}
                                  width={width}
                                  height={height}
                                  title={col}
                                />
                              </span>
                            ))}
                        </div>
                      </div>
                    ) : (
                      <div className="secondContainer">
                        <div className="row d-flex flex-row justify-content-evenly flex-wrap">
                          {profileDetails?.registeredEvents.map((col, i) => {
                            return (
                              <span
                                key={i}
                                className="d-flex justify-content-center"
                                style={{ width: "200px" }}
                                onClick={() => {
                                  setActive(eventHelper(col?.name));
                                  setEventSelected(eventHelper(col?.name));
                                  setShow(true);
                                }}
                              >
                                <EventCard3
                                  icon={iconHelpr(col?.name)}
                                  width={width}
                                  height={height}
                                  title={col?.name}
                                />
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    )
                  ) : (
                    <div
                      className="m-5 d-flex justify-content-center align-items-center"
                      style={{ color: "#fff" }}
                    >
                      Not registered for any event
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* Modal */}
          <Modal
            style={{ zIndex: 9999999 }}
            centered
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
                  className="modal-logo-img1"
                  src={iconHelpr(eventsFull[active])}
                  alt="Event Icon"
                  style={{
                    color: "white",
                    width: "5rem",
                  }}
                />
                <div className="modal-icon-text1">
                  {titleHelpr(events[active])}
                </div>
                <div
                  className="modal-close-wrapper1"
                  onClick={() => setShow(false)}
                >
                  <img
                    src={Cross}
                    alt="close button"
                    className="modal-close-btn1"
                  />
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body text>
              <Tabs defaultActiveKey="info" className="mb-3">
                <Tab
                  eventKey="info"
                  title="Info"
                  className="modal-tab-link1"
                  color="#efefef"
                >
                  <div className="info-wrapper1">
                    <p className="new-line1">
                      {eventSelected !== -1 && eventDetails[eventSelected].info}
                    </p>
                  </div>
                </Tab>
                <Tab eventKey="rules" title="Rules" className="modal-tab-link1">
                  <div className="info-wrapper1">
                    <p className="new-line1">
                      {eventSelected !== -1 &&
                        eventDetails[eventSelected].rules}
                    </p>
                  </div>
                </Tab>
                <Tab
                  eventKey="structure"
                  title="Structure"
                  className="modal-tab-link1"
                >
                  <div className="info-wrapper1" style={{ maxHeight: "30vh" }}>
                    <p className="new-line1">
                      {eventSelected !== -1 &&
                        eventDetails[eventSelected].structure}
                    </p>
                  </div>
                </Tab>
                <Tab
                  eventKey="judge"
                  title="Judging"
                  className="modal-tab-link1"
                >
                  <div className="info-wrapper1">
                    <p className="new-line1">
                      {eventSelected !== -1 &&
                        eventDetails[eventSelected].judging}
                    </p>
                  </div>
                </Tab>
                <Tab
                  eventKey="contact"
                  title="Contact"
                  className="modal-tab-link1"
                >
                  <div className="info-wrapper1">
                    <p className="new-line1">
                      {eventSelected !== -1 &&
                        eventDetails[eventSelected].contact}
                    </p>
                  </div>
                </Tab>
              </Tabs>
              {/* <div className="play-button-modal">
          <PlayButton link="#" />
        </div> */}
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default Profile;
