import React from "react";
import "../CSS/eventcard2.css";

const EventCard2 = (props) => {
  return (
    <div class="wrapper-new">
      <div class="container-new">
        <div class="top">
          {props.icon && (
            <img
              src={props.icon}
              alt="Icon"
              height="120px"
              width="120px"
              style={{
                color: "white",
                marginLeft: "20px",
                marginTop: "30px",
              }}
            />
          )}
        </div>
        <div class="bottom">
          <div class="left">
            <div class="details">
              <h1>Reverse Coding</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="inside">
        <div class="icon">*</div>
        <div class="contents">
          Hone your problem-solving skills by decrypting complex questions
        </div>
      </div>
    </div>
  );
};

export default EventCard2;
