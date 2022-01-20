import React from "react";
import EventCard1 from "../Components/EventCard1";
import EventCard2 from "../Components/EventCard2";
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
import Web from "../images/web.png";
import NTH from "../images/nth.png";

const Events = () => {
  const height = "250px";
  const width = "190px";
  return (
    <div className="bg-dark section-events height-full o-x-hide">
      <div className="container">
        <div className="row justify-content-start d-flex mb-3 gx-5">
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={RC}
              width={width}
              height={height}
              title="Reverse Coding"
              text="Hone your problem-solving skills by decrypting complex questions"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={Clash}
              width={width}
              height={height}
              title="Clash"
              text="Clash is based on Competitive Programming!"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={NTH}
              width={width}
              height={height}
              title="NTH"
              text="Decrypt the clues to solve complex puzzles and race your way to finish at top!"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={Wallstreet}
              width={width}
              height={height}
              title="WallStreet"
              text="Get an insight on stock markets by Investing and trading virtual money!"
            />
          </div>
        </div>
        <div className="row justify-content-start d-flex mb-3 gx-5">
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={BPlan}
              width={width}
              height={height}
              title="B-Plan"
              text="Showcase your entrepreneurial skills by presenting innovative business plans to the world!"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={Enigma}
              width={width}
              height={height}
              title="Enigma"
              text="Get ready to push your aptitude, logical reasoning skills limits by solving mind-boggling questions!"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={Datawiz}
              width={width}
              height={height}
              title="Datawiz"
              text="Test your Machine learning and data analytics skills before stepping into the world of Data Science!"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={Quiz}
              width={width}
              height={height}
              title="Quiz"
              text="Test your knowledge across wide range of topics and get a chance to win some exciting prizes!"
            />
          </div>
        </div>
        <div className="row justify-content-start d-flex mb-3 gx-5">
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={Paper}
              width={width}
              height={height}
              title="Paper Presentation"
              text="Present technical research papers with advanced perspectives while honing your skills of research!"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={Cretronix}
              width={width}
              height={height}
              title="Cretronix"
              text="Build and exhibit your own circuits by solving tech problems!"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={Pixelate}
              width={width}
              height={height}
              title="Pixelate"
              text="Let your creativity fuse with thoughtful designs and artistic originality!"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard2
              icon={Web}
              width={width}
              height={height}
              title="Webweaver"
              text="Build an aesthetic website to showcase your web development skills!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
