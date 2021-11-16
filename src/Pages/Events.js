import React from "react";
import EventCard1 from "../Components/EventCard1";
import "../CSS/events.css";
const Events = () => {
  return (
    <div className="container bg-dark height-full">
      <div className="row justify-content-around d-flex mb-3">
        <EventCard1 width="180px" height="220px" title="Clash" />
        <EventCard1 width="180px" height="220px" title="RC" />
        <EventCard1 width="180px" height="220px" title="NTH" />
        <EventCard1 width="180px" height="220px" title="WallStreet" />
      </div>
      <div className="row justify-content-around d-flex mb-3">
        <EventCard1 width="180px" height="220px" title="Datawiz" />
        <EventCard1 width="180px" height="220px" title="Quiz" />
        <EventCard1 width="180px" height="220px" title="Presentation" />
        <EventCard1 width="180px" height="220px" title="Cretronix" />
      </div>
    </div>
  );
};

export default Events;
