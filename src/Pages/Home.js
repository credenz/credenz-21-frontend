import React, { useEffect, useState } from "react";
import { Footer } from "../Components/Footer";
import "../CSS/home.css";
import HomeImage from "../images/credenzlive2.0.png";
import CyberBg from "../vid/Bg_3_slow.webm";

const Home = () => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
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
          <source src={CyberBg} type="video/webm" />
        </video>
        <div
          className={logoVisible ? "fade-in-delayed credenz-logo" : "d-none"}
        >
          <img src={HomeImage} alt="credenzLive" className="logo-img" />
        </div>
      </div>
      <Footer />
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
