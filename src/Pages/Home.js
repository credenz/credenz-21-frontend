import React, { useState, useEffect } from "react";
import HomeBg from "../vid/home-bg.webm";
import CyberBg from "../vid/cyberBg.webm";
import RoadBg from "../vid/roadBgSlow.webm";
import CircleFuture from "../vid/circle_future.mp4";
import "../CSS/home.css";
import NavbarCustom from "../Components/NavbarCustom";
import HomeImage from "../images/credenzlive2.0.png";
import { Footer } from "../Components/Footer";

const Home = () => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);
  const [preVideoEnd, setPreVideoEnd] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLogoVisible(true);
    }, 6000);
    setTimeout(() => setBgVisible(true), 5000);
    setTimeout(() => {
      setPreVideoEnd(true);
    }, 4500);
  }, []);
  return (
    <div className="section-home height-full-home o-x-hide">
      <div className="video-container">
        {/* <NavbarCustom comingSoon={true} /> */}
        <video
          muted
          autoPlay
          className={preVideoEnd ? "fade-out" : "pre-video"}
        >
          <source src={CircleFuture} type="video/mp4" />
        </video>
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
        </div>
        <Footer />
      </div>
    </div>
  );
  // return (
  //   <div className="section-home height-full-home o-x-hide">
  //     <div className="video-container">
  //       <NavbarCustom />
  //       <div className={sunPressed ? "sky" : "no-sky"} data-v-cf18eb5c="">
  //         <div className="clouds fill" data-v-cf18eb5c=""></div>
  //         <div className="starsCont fill" data-v-cf18eb5c="">
  //           <div className="stars fill" data-v-cf18eb5c=""></div>
  //           <div className="twinkling fill" data-v-cf18eb5c=""></div>
  //         </div>
  //         <div
  //           className={sunPressed ? "fade-out sun" : "sun"}
  //           data-v-cf18eb5c=""
  //           onClick={() => {
  //             setSunPressed(true);
  //             setTimeout(() => {
  //               setLogoVisible(true);
  //             }, 4700);
  //           }}
  //         >
  //           <div className="sunStripes fill" data-v-cf18eb5c=""></div>
  //         </div>
  //         <div className="city" data-v-cf18eb5c=""></div>
  //       </div>
  //       <video
  //         className={sunPressed ? "videoTag fade-in-image" : "no-video"}
  //         autoPlay
  //         loop
  //         muted
  //       >
  //         <source src={RoadBg} type="video/webm" />
  //       </video>
  //       <div
  //         className={logoVisible ? "fade-in-delayed credenz-logo" : "d-none"}
  //       >
  //         <img src={HomeImage} alt="credenzLive" className="logo-img" />
  //         <div className="coming-soon display-2">Coming Soon...</div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Home;
