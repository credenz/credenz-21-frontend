import React from "react";
import HomeBg from "../vid/home-bg.webm";
import "../CSS/home.css";
import HomeImage from "../images/c-live.png";

const Home = () => {
  return (
    <div className="section-home height-full o-x-hide">
      <div className="video-container">
        <video className="videoTag" autoPlay loop muted>
          <source src={HomeBg} type="video/webm" />
        </video>
        <img src={HomeImage} alt="credenzLive" className="credenz-logo" />
      </div>
    </div>
  );
};

export default Home;
