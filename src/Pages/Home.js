import React, { useEffect, useState } from "react";
import "../CSS/home.css";
import HomeImage from "../images/credenzlive2.0.png";
// import CyberBg from "../vid/Bg_3_slow.webm";
// import CyberBg from "../vid/future_1.webm";
// import CyberBg from "../vid/future_2.webm";
// import CyberBg from "../vid/future_3.webm";
// import CyberBg from '../vid/hexagon.webm'
import CyberBg from "../vid/future_4.webm";
import Loader from "../Components/Loader";

const Home = () => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [preVideoEnd, setPreVideoEnd] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLogoVisible(true);
    }, 1300);
    setTimeout(() => setBgVisible(true), 600);
    setTimeout(() => {
      setPreVideoEnd(true);
    }, 4500);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center styleLoader">
          <Loader />
        </div>
      ) : (
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
              className={
                logoVisible ? "fade-in-delayed credenz-logo" : "d-none"
              }
            >
              <img src={HomeImage} alt="credenzLive" className="logo-img" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
