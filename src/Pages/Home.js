import React, { useState, useEffect } from "react";
import HomeBg from "../vid/home-bg.webm";
import CyberBg from "../vid/cyberBg_2.mp4";
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
    }, 1300);
    setTimeout(() => setBgVisible(true), 600);
    setTimeout(() => {
      setPreVideoEnd(true);
    }, 4500);
  }, []);
  return (
    <div className="section-home height-full-home o-x-hide">
      <div className="video-container">
        {/* <NavbarCustom comingSoon={true} /> */}
        {/* <video
          muted
          autoPlay
          className={preVideoEnd ? "fade-out" : "pre-video"}
        >
          <source src={CircleFuture} type="video/mp4" />
        </video> */}
        <video
          className={bgVisible ? "videoTag fade-in-image" : "no-video"}
          autoPlay
          loop
          muted
        >
          <source src={CyberBg} type="video/mp4" />
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
  //       <div class={sunPressed ? "sky" : "no-sky"} data-v-cf18eb5c="">
  //         <div class="clouds fill" data-v-cf18eb5c=""></div>
  //         <div class="starsCont fill" data-v-cf18eb5c="">
  //           <div class="stars fill" data-v-cf18eb5c=""></div>
  //           <div class="twinkling fill" data-v-cf18eb5c=""></div>
  //         </div>
  //         <div
  //           class={sunPressed ? "fade-out sun" : "sun"}
  //           data-v-cf18eb5c=""
  //           onClick={() => {
  //             setSunPressed(true);
  //             setTimeout(() => {
  //               setLogoVisible(true);
  //             }, 4700);
  //           }}
  //         >
  //           <div class="sunStripes fill" data-v-cf18eb5c=""></div>
  //         </div>
  //         <div class="city" data-v-cf18eb5c=""></div>
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
