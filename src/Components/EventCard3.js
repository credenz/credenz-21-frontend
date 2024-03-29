import React, { useState } from "react";
import "../CSS/eventcard3.css";

const EventCard3 = (props) => {
  const [hover, setHover] = useState("");
  return (
    <div
      className={props.active ? `outer2 focused ${hover}` : `outer2 ${hover}`}
      onMouseEnter={() => {
        setHover("hover");
      }}
      onMouseLeave={() => {
        setHover("");
      }}
    >
      <div className={props.active ? `wrapper-new` : `wrapper-new`}>
        <div className="container-new">
          <img
            src={props.icon}
            alt="Icon"
            className="event-icon"
            style={{
              height: props.height || "90px",
              width: props.width || "90px",
              marginBottom: props.marginBottomImg || "0px",
            }}
          />
          <div className="card-title">{props.title}</div>
        </div>
      </div>
      <div className="inside d-none">
        <div className="icon">
          {/* <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABf0lEQVRIidWVTU4CQRCFqyGwEW9gPAC60gOIC13qYIxXIBDjzyXIxDPoHeQaRheiC0VdafQAbAQjnwuqpSPd8yMrKul0Zt7rejVvqrtF5j1MEgiURSTSsSYiSwq9iciNiHRE5NIYM8ytDOwBL6THM1DPk7gAnDkJboEjoAos6FgBjoGuw4uBQhYBm/wTaCQt0mKaygWIs9hik2/k+OqaIxKFSGXH80aAA0AAayn8BJR8hAPHc68tKQJF4E4p+/a9m8h2wrkxZuRLYjQC2LeIXOjjtE3Ao6pXfQmyhHYXwIMP7CtYSUgQtEjxRaX07bv0vs0X1r5fi12Bd52XZxCwaz98Atc6b80gsK3z1RTitGl3hja9/9umLqHM+OACaP5D4FDhnnejKanuHBU1L8m/bhMYACNgJ40cOyItoJjALWrlA13TzlJNwRFBt/+JbqKKjlXg1PF8BLRD/y4kFDE+uNKil2RL2pVZEpFdGZ8t6zK5Ml9lcmV2jDFfmSufu/gBIo4rqpw825AAAAAASUVORK5CYII="
              alt="IIcon"
            /> */}
        </div>
        {props.text && <div className="contents">{props.text}</div>}
      </div>
    </div>
  );
};

export default EventCard3;
