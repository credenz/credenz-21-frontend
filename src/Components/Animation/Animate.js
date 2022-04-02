import React from "react";
import { ReactComponent as InitLogoSvg } from "./CredenzOutlineLogo.svg";
import credenzFinalLogo from "./CredenzFinalLogo.png";
import { ReactComponent as LogoTextSvg } from "./CredenzThemeText.svg";
// import { ReactComponent as TitleTextSvg } from "./only_sponsor_presents.svg";
import TitlePng from "../../images/only_sponsor_presents.png";
import "./logoAnimate.css";
const Animate = () => {
  return (
    <>
      <div className="animate-main-container">
        <div className="credenz-logo-main-container">
          <div className="credenz-svg-text-top bg-color-white">
            <a href="https://www.ciondigital.com/"> 
              <img
                src={TitlePng}
                alt="adkjad"
                className="credenz-logo-name-text-top"
                width={"200"}
                maxWidth="100%"
                id="credenz-logo-name"
              />
            </a>
          </div>
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
