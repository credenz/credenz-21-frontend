import React, { useState, useEffect } from "react";
import RoadBg from "../vid/roadBgSlow.webm";
import "../CSS/home.css";
import NavbarCustom from "../Components/NavbarCustom";
import HomeImage from "../images/credenzlive2.0_1.png";
import { Footer } from "../Components/Footer";

const ComingSoonHome = () => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogoVisible(true);
    }, 500);
    setTimeout(() => setBgVisible(true), 200);
  }, []);
  return (
    <div className="section-home height-full-home o-x-hide">
      <div className="video-container">
        <NavbarCustom comingSoon={true} />
        <video
          className={bgVisible ? "videoTag fade-in-image" : "no-video"}
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
          <div className="coming-soon display-3">Coming Soon</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ComingSoonHome;
