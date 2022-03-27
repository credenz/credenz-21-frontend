import React from "react";
import { ReactComponent as InitLogoSvg } from "./CredenzOutlineLogo.svg";
import credenzFinalLogo from "./CredenzFinalLogo.png";
import { ReactComponent as LogoTextSvg } from "./CredenzThemeText.svg";
import "./logoAnimate.css";
const Animate = () => { 
  return (
    <>
      <div className="animate-main-container">
        <div className="credenz-logo-main-container">
          <InitLogoSvg
            className="credenz-init-logo-container"
            width={"346"}
            maxWidth="100%"
            id="credenz-init-logo"
          />
          <img
            src={credenzFinalLogo}
            alt="Credenz Logo"
            width={"346"}
            maxWidth="100%"
            id="credenz-final-logo"
          />

          <div className="credenz-svg-text">
            <LogoTextSvg
              className="credenz-logo-name-text"
              width={"312"}
              maxWidth="100%"
              id="credenz-logo-name"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Animate;
