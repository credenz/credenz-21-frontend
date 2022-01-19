import React from "react";
import "../CSS/eventcard1.css";
import { Container } from "react-bootstrap";
import Typewriter from "typewriter-effect";
const EventCard1 = (props) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    // <Container style={{ width: props.width || "270px" }}>
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
          height: props.height || "350px",
          width: props.width || "270px",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
        }}
      >
        {props.title && <div className="card-header">{props.title}</div>}
        {props.text && (
          <div className={`card-text ${hovered ? "hovered" : ""}`}>
            {hovered && (
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.changeDelay(30).typeString(props.text).start();
                }}
              />
            )}
          </div>
        )}
        {props.icon && (
          <img
            src={props.icon}
            alt="Icon"
            height="100px"
            width="100px"
            style={{ color: "white" }}
          />
        )}
      </div>
      {/* <div className={`hover-card-text ${hovered ? "hovered" : ""}`}>
        <span>{props.title}</span>
      </div> */}
    </div>
    // </Container>
  );
};

export default EventCard1;
