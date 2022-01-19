import React from "react";
import EventCard1 from "../Components/EventCard1";
import EventCard2 from "../Components/EventCard2";
import "../CSS/events.css";
import RC from "../images/rc.png";
const Events = () => {
  const height = "250px";
  const width = "190px";
  return (
    <div className="bg-dark section-events height-full o-x-hide">
      <div className="container">
        <EventCard2 icon={RC} />
        <div className="row justify-content-start d-flex mb-3 gx-5">
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1
              width={width}
              height={height}
              title="Reverse Coding"
              text="Hone your problem-solving skills by decrypting complex questions"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1
              width={width}
              height={height}
              title="Clash"
              text="Hone your problem-solving skills by decrypting complex questions"
            />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width={width} height={height} title="NTH" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width={width} height={height} title="WallStreet" />
          </div>
        </div>
        <div className="row justify-content-start d-flex mb-3 gx-5">
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width={width} height={height} title="B-Plan" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width={width} height={height} title="Vertigo" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width={width} height={height} title="Datawiz" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width={width} height={height} title="Quiz" />
          </div>
        </div>
        <div className="row justify-content-start d-flex mb-3 gx-5">
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width={width} height={height} title="Presentation" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width={width} height={height} title="Cretronix" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width={width} height={height} title="5George" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width={width} height={height} title="Contrary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
