import React from "react";
import EventCard1 from "../Components/EventCard1";
import "../CSS/events.css";
const Events = () => {
  return (
    <div className="bg-dark section-events height-full o-x-hide">
      <div className="container">
        <div className="row justify-content-around d-flex mb-3 gx-5">
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="Clash" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="RC" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="NTH" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="WallStreet" />
          </div>
        </div>
        <div className="row justify-content-around d-flex mb-3 gx-5">
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="B-Plan" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="Vertigo" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="Datawiz" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="Quiz" />
          </div>
        </div>
        <div className="row justify-content-around d-flex mb-3 gx-5">
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="Presentation" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="Cretronix" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="5George" />
          </div>
          <div className="col-md-3 justify-content-center m-mb">
            <EventCard1 width="150px" height="180px" title="Contrary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
