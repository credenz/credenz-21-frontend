import React, { useEffect, useState } from "react";
import { Modal, Tab, Tabs } from "react-bootstrap";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import EventCard2 from "../Components/EventCard2";
import "../CSS/events.css";
import BPlan from "../images/bplan.png";
import Clash from "../images/clash.png";
import Cretronix from "../images/cretronix.png";
import Datawiz from "../images/datawiz.png";
import Enigma from "../images/enigma.png";
import NTH from "../images/nth.png";
import Paper from "../images/paper.png";
import Pixelate from "../images/pixelate.png";
import Quiz from "../images/quiz.png";
import RC from "../images/rc.png";
import Wallstreet from "../images/wallstreet.png";
import Webweaver from "../images/web.png";
import { Button } from "@nextui-org/react";
import { events, eventDetails, tabs } from "../staticInfo.js";
import NavbarCustom from "../Components/NavbarCustom";
import { Footer } from "../Components/Footer";

const Events = () => {
  const height = "65px";
  const width = "65px";
  const [active, setActive] = useState(-1);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const titleHelpr = (e) => {
    if (e === "RC") {
      return "Reverse Coding";
    } else if (e === "Paper") {
      return "Paper Presentation";
    } else return e;
  };

  const [eventSelected, setEventSelected] = useState(0);
  const [mainText, setMainText] = useState(eventDetails[0].info);
  const [mainHeading, setMainHeading] = useState(titleHelpr(events[0]));

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

  useEffect(() => {
    setActive(-1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-dark section-events height-full o-x-hide">
      {/* <NavbarCustom relative /> */}
      {/* NEW GRID */}
      <div className="row mt-3 ms-3 me-3">
        <div className="col-md-3">
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(0);
              }}
              onClick={() => {
                setActive(0);
                setMainHeading(titleHelpr(events[0]));
                setMainText(eventDetails[0].info);
                setEventSelected(0);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={RC}
                width={width}
                height={height}
                title="Reverse Coding"
                text="Hone your problem-solving skills by decrypting complex questions"
                active={0 === active || 0 === eventSelected ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(1);
              }}
              onClick={() => {
                setActive(1);
                setMainHeading(titleHelpr(events[1]));
                setMainText(eventDetails[1].info);
                setEventSelected(1);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Clash}
                width={width}
                height={height}
                title="Clash"
                text="Clash is based on Competitive Programming!"
                active={1 === active || 1 === eventSelected ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(2);
              }}
              onClick={() => {
                setActive(2);
                setMainHeading(titleHelpr(events[2]));
                setMainText(eventDetails[2].info);
                setEventSelected(2);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={NTH}
                width={width}
                height={height}
                title="NTH"
                text="Decrypt the clues to solve complex puzzles and race your way to finish at top!"
                active={2 === active || 2 === eventSelected ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(3);
              }}
              onClick={() => {
                setActive(3);
                setMainHeading(titleHelpr(events[3]));
                setMainText(eventDetails[3].info);
                setEventSelected(3);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Wallstreet}
                width={"50px"}
                height={"50px"}
                title="WallStreet"
                marginBottomImg="10%"
                text="Get an insight on stock markets by Investing and trading virtual money!"
                active={3 === active || 3 === eventSelected ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(4);
              }}
              onClick={() => {
                setActive(4);
                setMainHeading(titleHelpr(events[4]));
                setMainText(eventDetails[4].info);
                setEventSelected(4);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={BPlan}
                width={"90px"}
                height={"90px"}
                title="B-Plan"
                text="Showcase your entrepreneurial skills by presenting innovative business plans to the world!"
                active={4 === active || 4 === eventSelected ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(5);
              }}
              onClick={() => {
                setActive(5);
                setMainHeading(titleHelpr(events[5]));
                setMainText(eventDetails[5].info);
                setEventSelected(5);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Enigma}
                width={width}
                height={height}
                title="Enigma"
                text="Get ready to push your aptitude, logical reasoning skills limits by solving mind-boggling questions!"
                active={5 === active || 5 === eventSelected ? true : false}
              />
            </div>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <div
            className="row justify-content-center"
            style={{ height: "fit-content" }}
          >
            <div className="main-wrapper">
              <div className="container container-inside ">
                <div className="main-text">{mainText}</div>
                <div className="main-heading">{mainHeading}</div>
              </div>
            </div>
          </div>
          <div
            className="d-flex justify-content-center row"
            style={{ height: "50%", paddingTop: "50px" }}
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
                  auto
                  color="warning"
                  rounded
                  onClick={() => {
                    setMainText(eventDetails[eventSelected].info);
                    setActiveTab(0);
                  }}
                >
                  Info
                </div>
              </div>
              <div className="col-md-4 mb-2 d-flex justify-content-center">
                <div
                  className={`tabButton d-flex justify-content-center align-items-center ${
                    activeTab === 1 ? "activeTab" : ""
                  } `}
                  auto
                  color="warning"
                  rounded
                  onClick={() => {
                    setMainText(eventDetails[eventSelected].rules);
                    setActiveTab(1);
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
                  auto
                  color="warning"
                  rounded
                  onClick={() => {
                    setMainText(eventDetails[eventSelected].structure);
                    setActiveTab(2);
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
                  auto
                  color="warning"
                  rounded
                  onClick={() => {
                    setMainText(eventDetails[eventSelected].judging);
                    setActiveTab(3);
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
                  auto
                  color="warning"
                  rounded
                  onClick={() => {
                    setMainText(eventDetails[eventSelected].contact);
                    setActiveTab(4);
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
        <div className="col-md-3">
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(6);
              }}
              onClick={() => {
                setActive(6);
                setMainHeading(titleHelpr(events[6]));
                setMainText(eventDetails[6].info);
                setEventSelected(6);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Datawiz}
                width={"50px"}
                height={"50px"}
                title="Datawiz"
                text="Test your Machine learning and data analytics skills before stepping into the world of Data Science!"
                active={6 === active || 6 === eventSelected ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(7);
              }}
              onClick={() => {
                setActive(7);
                setMainHeading(titleHelpr(events[7]));
                setMainText(eventDetails[7].info);
                setEventSelected(7);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Quiz}
                width={width}
                height={height}
                title="Quiz"
                text="Test your knowledge across wide range of topics and get a chance to win some exciting prizes!"
                active={7 === active || 7 === eventSelected ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(8);
              }}
              onClick={() => {
                setActive(8);
                setMainHeading(titleHelpr(events[8]));
                setMainText(eventDetails[8].info);
                setEventSelected(8);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Paper}
                width={width}
                height={height}
                title="Paper Presentation"
                text="Present technical research papers with advanced perspectives while honing your skills of research!"
                active={8 === active || 8 === eventSelected ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(9);
              }}
              onClick={() => {
                setActive(9);
                setMainHeading(titleHelpr(events[9]));
                setMainText(eventDetails[9].info);
                setEventSelected(9);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Cretronix}
                width={width}
                height={height}
                title="Cretronix"
                text="Build and exhibit your own circuits by solving tech problems!"
                active={9 === active || 9 === eventSelected ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(10);
              }}
              onClick={() => {
                setActive(10);
                setMainHeading(titleHelpr(events[10]));
                setMainText(eventDetails[10].info);
                setEventSelected(10);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Pixelate}
                width={width}
                height={height}
                title="Pixelate"
                text="Let your creativity fuse with thoughtful designs and artistic originality!"
                active={10 === active || 10 === eventSelected ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(11);
              }}
              onClick={() => {
                setActive(11);
                setMainHeading(titleHelpr(events[11]));
                setMainText(eventDetails[11].info);
                setEventSelected(11);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Webweaver}
                width={width}
                height={height}
                title="Webweaver"
                text="Build an aesthetic website to showcase your web development skills!"
                active={11 === active || 11 === eventSelected ? true : false}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        centered
        backdrop="static"
        show={show}
        onHide={() => {
          setShow(false);
        }}
        size="lg"
      >
        <Modal.Header closeButton closeLabel="">
          <Modal.Title>
            <img
              src={iconHelpr(events[active])}
              alt="Event Icon"
              style={{
                color: "white",
                width: "100px",
              }}
            />
            {titleHelpr(events[active])}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="info"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="info" title="Info">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo nostrum maxime neque animi provident molestiae fuga
                unde ut accusamus aspernatur quo, velit quae, soluta atque
                libero est. Facere, vitae dolor!
              </p>
            </Tab>
            <Tab eventKey="rules" title="Rules">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo nostrum maxime neque animi provident molestiae fuga
                unde ut accusamus aspernatur quo, velit quae, soluta atque
                libero est. Facere, vitae dolor!
              </p>
            </Tab>
            <Tab eventKey="structure" title="Structure">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo nostrum maxime neque animi provident molestiae fuga
                unde ut accusamus aspernatur quo, velit quae, soluta atque
                libero est. Facere, vitae dolor!
              </p>
            </Tab>
            <Tab eventKey="judge" title="Judging Criteria">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo nostrum maxime neque animi provident molestiae fuga
                unde ut accusamus aspernatur quo, velit quae, soluta atque
                libero est. Facere, vitae dolor!
              </p>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo nostrum maxime neque animi provident molestiae fuga
                unde ut accusamus aspernatur quo, velit quae, soluta atque
                libero est. Facere, vitae dolor!
              </p>
            </Tab>
          </Tabs>
        </Modal.Body>
      </Modal>
      <Footer />
    </div>
  );
};

export default Events;
