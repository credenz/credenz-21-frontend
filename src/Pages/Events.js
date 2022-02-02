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
import NavbarCustom from "../Components/NavbarCustom";

const Events = () => {
  const height = "250px";
  const width = "120px";
  const [active, setActive] = useState("3");
  const [show, setShow] = useState(false);
  const events = {
    0: "RC",
    1: "Clash",
    2: "NTH",
    3: "Wallstreet",
    4: "BPlan",
    5: "Enigma",
    6: "Dataviz",
    7: "Quiz",
    8: "Paper",
    9: "Cretronix",
    10: "Pixelate",
    11: "Webweaver",
  };

  const titleHelpr = (e) => {
    if (e === "RC") {
      return "Reverse Coding";
    } else if (e === "Paper") {
      return "Paper Presentation";
    } else return e;
  };

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
      <NavbarCustom relative />
      {/* NEW GRID */}
      <div className="row">
        <div className="col-md-3">
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(0);
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
                active={0 === active ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(1);
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
                active={1 === active ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(2);
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
                active={2 === active ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(3);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Wallstreet}
                width={"100px"}
                marginTopIcon={"30%"}
                height={height}
                title="WallStreet"
                text="Get an insight on stock markets by Investing and trading virtual money!"
                active={3 === active ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(4);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={BPlan}
                width={"210px"}
                height={height}
                title="B-Plan"
                text="Showcase your entrepreneurial skills by presenting innovative business plans to the world!"
                active={4 === active ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(5);
              }}
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Enigma}
                width={"170px"}
                height={height}
                title="Enigma"
                text="Get ready to push your aptitude, logical reasoning skills limits by solving mind-boggling questions!"
                active={5 === active ? true : false}
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
                <div className="main-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. At
                  dolores magni natus unde reiciendis nihil, optio quae rem
                  similique neque autem animi nisi dolor ea qui corporis rerum.
                  Voluptatem molestiae est inventore earum fugiat?
                  Necessitatibus assumenda laudantium eius voluptatibus repellat
                  est, corporis iure. Quis facere inventore fuga molestiae
                  facilis. Voluptatum corrupti repellat ea nisi aut doloribus
                  pariatur maiores. Repudiandae, consequuntur facilis. Placeat
                  non excepturi ducimus mollitia! Pariatur quod et autem!
                  Temporibus laborum mollitia magnam! Expedita, molestias
                  mollitia, unde ratione sapiente beatae quaerat blanditiis cum
                  vitae modi distinctio incidunt rerum officiis placeat
                  reiciendis dolorum nihil! Placeat unde harum tenetur sapiente
                  minima.
                </div>
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
                <Button class="tabButton" auto color="warning" rounded>
                  Rules
                </Button>
              </div>
              <div className="col-md-4 mb-2 d-flex justify-content-center">
                <Button class="tabButton" auto color="warning" rounded>
                  Test
                </Button>
              </div>
              <div className="col-md-4 mb-2 d-flex justify-content-center">
                <Button class="tabButton" auto color="warning" rounded>
                  Test
                </Button>
              </div>
              <div className="mt-3 col-md-4 mb-2 d-flex justify-content-center">
                <Button class="tabButton" auto color="warning" rounded>
                  Test
                </Button>
              </div>
              <div className="mt-3 col-md-4 mb-2 d-flex justify-content-center">
                <Button class="tabButton" auto color="warning" rounded>
                  Test
                </Button>
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
              onMouseLeave={() => {
                setActive(-1);
              }}
            >
              <EventCard2
                icon={Datawiz}
                width={"100px"}
                height={height}
                title="Datawiz"
                text="Test your Machine learning and data analytics skills before stepping into the world of Data Science!"
                active={6 === active ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(7);
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
                active={7 === active ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(8);
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
                active={8 === active ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(9);
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
                active={9 === active ? true : false}
              />
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(10);
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
                active={10 === active ? true : false}
              />
            </div>
            <div
              className="col-md-6"
              onMouseEnter={() => {
                setActive(11);
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
                active={11 === active ? true : false}
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
    </div>
  );
};

export default Events;
