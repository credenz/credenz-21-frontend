import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import "../CSS/profile.css";
import ProfileIcon from "../images/user.png";
import CallIcon from "../images/phone-receiver-silhouette.png";
import EmailIcon from "../images/email.png";
import EventCard2 from "../Components/EventCard2";
import RC from "../images/rc.png";
import EventCard3 from "../Components/EventCard3";
import { API } from "../axios/API";
import { Modal, Tab, Tabs } from "react-bootstrap";
import BPlan from "../images/bplan.png";
import Clash from "../images/clash.png";
import Cross from "../images/close-line.png";
import Cretronix from "../images/cretronix.png";
import Datawiz from "../images/datawiz.png";
import Enigma from "../images/enigma.png";
import NTH from "../images/nth.png";
import CredenzLogo from "../images/onlyLogo.png";
import Paper from "../images/paper.png";
import Pixelate from "../images/pixelate.png";
import Quiz from "../images/quiz.png";
import Wallstreet from "../images/wallstreet.png";
import Webweaver from "../images/web.png";
import { eventDetails, events } from "../staticInfo";

const Profile = () => {
  const height = "65px";
  const width = "65px";
  const [loading, setLoading] = useState(true);
  const user = {
    name: "Sanket Kulkarni",
    email: "sanketkulkani@gmail.com",
    contact: "+91 9090807990",
    userName: "Sanketak08",
    registeredEvents: [
      { eventName: "Enigma", password: "df8en24rr23hr" },
      { eventName: "RC", password: "df8en24rr23hr" },
      { eventName: "Clash", password: "df8en24rr23hr" },
      { eventName: "NTH", password: "df8en24rr23hr" },
      { eventName: "Pixelate", password: "df8en24rr23hr" },
      { eventName: "Wallstreet", password: "df8en24rr23hr" },
      { eventName: "NTH", password: "df8en24rr23hr" },
      { eventName: "Pixelate", password: "df8en24rr23hr" },
      { eventName: "Wallstreet", password: "df8en24rr23hr" },
    ],
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(false);
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(-1);
  const [eventSelected, setEventSelected] = useState(-1);

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
    } else if (e === "Dataviz") {
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

  const titleHelpr = (e) => {
    if (e === "RC") {
      return "Reverse Coding";
    } else if (e === "Paper") {
      return "Paper Presentation";
    } else return e;
  };

  const fetchProfileDetails = async () => {
    let token = localStorage.getItem("credenz_access_token");
    let username = localStorage.getItem("credenz_username");
    if (token) {
      API.getUserDetails(username)
        .then((res) => {
          setUserDetails(res.data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProfileDetails();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

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
                        <div className="imgContainer"></div>
                        <div className="userName mt-4">{user.userName}</div>
                      </div>
                      <div className="itemContainer">
                        <div className="itemRow">
                          <img
                            src={ProfileIcon}
                            alt="Profile icon"
                            style={{ marginRight: 10 }}
                            className="commonIcon"
                          />
                          <p className="detailText" style={{ margin: 0 }}>
                            {user.name}
                          </p>
                        </div>
                        <div className="itemRow">
                          <img
                            src={EmailIcon}
                            alt="Email icon"
                            style={{ marginRight: 10 }}
                            className="commonIcon"
                          />
                          <p className="detailText" style={{ margin: 0 }}>
                            {user.email}
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
                            {user.contact}
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
                  {user.registeredEvents.length > 0 ? (
                    <div className="secondContainer">
                      <div
                        onClick={() => {
                          setActive(0);
                          setEventSelected(0);
                          setShow(true);
                        }}
                        className="row d-flex flex-row justify-content-evenly flex-wrap">
                        {user.registeredEvents.map((col, i) => (
                          <EventCard3
                            icon={RC}
                            width={width}
                            height={height}
                            title={col.eventName}
                            text="Hone your problem-solving skills by decrypting complex questions"
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="m-5 d-flex justify-content-center align-items-center"
                      style={{ color: "#fff" }}>
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
            size="lg">
            <Modal.Header style={{ width: "90%" }}>
              <Modal.Title
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                <img
                  className="modal-logo-img1"
                  src={iconHelpr(events[active])}
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
                  onClick={() => setShow(false)}>
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
                  color="#efefef">
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
                  className="modal-tab-link1">
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
                  className="modal-tab-link1">
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
                  className="modal-tab-link1">
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
