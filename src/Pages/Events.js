import React, { useState, useEffect, useRef } from "react";
import EventCard1 from "../Components/EventCard1";
import EventCard2 from "../Components/EventCard2";
import VerticalCarousel1 from "../Components/VerticalCarousel1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/events.css";
import RC from "../images/rc.png";
import Clash from "../images/clash.png";
import BPlan from "../images/bplan.png";
import Cretronix from "../images/cretronix.png";
import Datawiz from "../images/datawiz.png";
import Enigma from "../images/enigma.png";
import Paper from "../images/paper.png";
import Pixelate from "../images/pixelate.png";
import Quiz from "../images/quiz.png";
import Wallstreet from "../images/wallstreet.png";
import Webweaver from "../images/web.png";
import NTH from "../images/nth.png";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";

const Events = () => {
  const height = "250px";
  const width = "190px";
  const [active, setActive] = useState("3");
  const sliderRef = useRef(null);
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    className: "text-white",
    centerMode: true,
    focusOnSelect: true,
    afterChange: (e) => {
      console.log("Active is:", e);
      setActive(e);
    },
    responsive: [
      {
        breakpoint: 2560,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
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
    setActive(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-dark section-events height-full o-x-hide">
      <div className="container-fluid">
        {/* EXPERIMENT 2 */}
        <div className="centered">
          <Slider {...settings} ref={sliderRef}>
            <div onClick={() => 0 === active && setShow(true)}>
              <EventCard2
                icon={RC}
                width={width}
                height={height}
                title="Reverse Coding"
                text="Hone your problem-solving skills by decrypting complex questions"
                active={0 === active ? true : false}
              />
            </div>
            <div onClick={() => 1 === active && setShow(true)}>
              <EventCard2
                icon={Clash}
                width={width}
                height={height}
                title="Clash"
                text="Clash is based on Competitive Programming!"
                active={1 === active ? true : false}
              />
            </div>
            <div onClick={() => 2 === active && setShow(true)}>
              <EventCard2
                icon={NTH}
                width={width}
                height={height}
                title="NTH"
                text="Decrypt the clues to solve complex puzzles and race your way to finish at top!"
                active={2 === active ? true : false}
              />
            </div>
            <div onClick={() => 3 === active && setShow(true)}>
              <EventCard2
                icon={Wallstreet}
                width={"150px"}
                marginTopIcon={"30%"}
                height={height}
                title="WallStreet"
                text="Get an insight on stock markets by Investing and trading virtual money!"
                active={3 === active ? true : false}
              />
            </div>
            <div onClick={() => 4 === active && setShow(true)}>
              <EventCard2
                icon={BPlan}
                width={"210px"}
                height={height}
                title="B-Plan"
                text="Showcase your entrepreneurial skills by presenting innovative business plans to the world!"
                active={4 === active ? true : false}
              />
            </div>
            <div onClick={() => 5 === active && setShow(true)}>
              <EventCard2
                icon={Enigma}
                width={"170px"}
                height={height}
                title="Enigma"
                text="Get ready to push your aptitude, logical reasoning skills limits by solving mind-boggling questions!"
                active={5 === active ? true : false}
              />
            </div>
            <div onClick={() => 6 === active && setShow(true)}>
              <EventCard2
                icon={Datawiz}
                width={"150px"}
                height={height}
                title="Datawiz"
                text="Test your Machine learning and data analytics skills before stepping into the world of Data Science!"
                active={6 === active ? true : false}
              />
            </div>
            <div onClick={() => 7 === active && setShow(true)}>
              <EventCard2
                icon={Quiz}
                width={width}
                height={height}
                title="Quiz"
                text="Test your knowledge across wide range of topics and get a chance to win some exciting prizes!"
                active={7 === active ? true : false}
              />
            </div>
            <div onClick={() => 8 === active && setShow(true)}>
              <EventCard2
                icon={Paper}
                width={width}
                height={height}
                title="Paper Presentation"
                text="Present technical research papers with advanced perspectives while honing your skills of research!"
                active={8 === active ? true : false}
              />
            </div>
            <div onClick={() => 9 === active && setShow(true)}>
              <EventCard2
                icon={Cretronix}
                width={width}
                height={height}
                title="Cretronix"
                text="Build and exhibit your own circuits by solving tech problems!"
                active={9 === active ? true : false}
              />
            </div>
            <div onClick={() => 10 === active && setShow(true)}>
              <EventCard2
                icon={Pixelate}
                width={width}
                height={height}
                title="Pixelate"
                text="Let your creativity fuse with thoughtful designs and artistic originality!"
                active={10 === active ? true : false}
              />
            </div>
            <div onClick={() => 11 === active && setShow(true)}>
              <EventCard2
                icon={Webweaver}
                width={width}
                height={height}
                title="Webweaver"
                text="Build an aesthetic website to showcase your web development skills!"
                active={11 === active ? true : false}
              />
            </div>
          </Slider>
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
