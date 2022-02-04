import React, { useState } from "react";
import NavbarCustom from "../Components/NavbarCustom";
import "../CSS/home.css";
import HomeImage from "../images/credenzlive2.0.png";
import RoadBg from "../vid/roadBgSlow.webm";

const Home = () => {
  const [sunPressed, setSunPressed] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  return (
    <div className="section-home height-full-home o-x-hide">
      <div className="video-container">
        <NavbarCustom />
        <div class={sunPressed ? "sky" : "no-sky"} data-v-cf18eb5c="">
          <div class="clouds fill" data-v-cf18eb5c=""></div>
          <div class="starsCont fill" data-v-cf18eb5c="">
            <div class="stars fill" data-v-cf18eb5c=""></div>
            <div class="twinkling fill" data-v-cf18eb5c=""></div>
          </div>
          <div
            class={sunPressed ? "fade-out sun" : "sun"}
            data-v-cf18eb5c=""
            onClick={() => {
              setSunPressed(true);
              setTimeout(() => {
                setLogoVisible(true);
              }, 4700);
            }}
          >
            <div class="sunStripes fill" data-v-cf18eb5c=""></div>
          </div>
          <div class="city" data-v-cf18eb5c=""></div>
        </div>
        <video
          className={sunPressed ? "videoTag fade-in-image" : "no-video"}
          autoPlay
          loop
          muted
        >
          <source src={RoadBg} type="video/webm" />
        </video>
        <div
          className={logoVisible ? "fade-in-delayed credenz-logo" : "d-none"}
        >
          <img src={HomeImage} alt="credenzLive" className="logo-img" />
          <div className="coming-soon display-2">Coming Soon...</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
