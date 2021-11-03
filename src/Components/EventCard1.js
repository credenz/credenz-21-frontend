import React from "react";
import { Card } from "react-bootstrap";
import "../CSS/eventcard1.css";
const EventCard1 = () => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div style={{ width: "270px" }}>
      <div className="wrapper">
        <div
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          className="hover-effect-1"
          style={{
            backgroundColor: "#000",
            height: "350px",
            width: "270px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className={`hover-card-text ${hovered ? "hovered" : ""}`}>
          <span>REVERSE</span>
        </div>
      </div>
    </div>
  );
};

export default EventCard1;
