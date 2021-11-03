import React from "react";
import CyberPunkButton from "../Components/CyberPunkButton";
import EventCard1 from "../Components/EventCard1";
const Events = () => {
  return (
    <div>
      <h3>Events</h3>
      <div className="container">
        <CyberPunkButton />
      </div>
      <hr />
      <div className="container bg-light">
        <EventCard1 />
      </div>
    </div>
  );
};

export default Events;
