import React from "react";
import { ReactComponent as SvgLogo1 } from "./logo.svg";
import newlogo from "./Logov1-2-2.png";
import { ReactComponent as SvgLogo2 } from "./logoname2.svg";
import "./Animate.css";
const AnimateComponent = () => {
  return (
    <>
      <div className="cred-container">
        <div className="main-container">
          <div className="img-container">
            <SvgLogo1
            className="credenz-logo-container"
            width={"346"}
            maxWidth="100%"
            id="credenz-init-logo"
          />
            <img
              class="credenzmasklogo"
              src={newlogo}
              alt="Smiley"
              width={"346"}
              maxWidth="100%"
              id="credenz-logo-final"
            />

            <div className="text-container">
              <SvgLogo2
                className="credenz-logo-name-text"
                width={"346"}
                maxWidth="100%"
                id="credenz-logo-name"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimateComponent;
