import React, { useEffect, useState } from "react";
import Animate from "../Components/Animation/Animate";
// import CyberBg from "../vid/future_3.webm";
// import CyberBg from '../vid/hexagon.webm'
// import CyberBg from "../vid/future_4.webm";
import Loader from "../Components/Loader";
import "../CSS/home.css";
import bgImage from "../images/bg.png";

const Home = () => {
  const [logoVisible, setLogoVisible] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [preVideoEnd, setPreVideoEnd] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLogoVisible(true);
    }, 1300);
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
        <>
          {/* <NavbarCustom /> */}
          <div className="section-home height-full-home o-x-hide">
            {/* <div className="row d-flex justify-content-center h2 title-sponsor-home ">
              Presents
            </div> */}
            <img src={bgImage} alt="bg" className="bg-image" />
            <div className="video-container">
              <div
                className={
                  logoVisible ? "fade-in-delayed credenz-logo" : "d-none"
                }
              >
                {/* <img src={HomeImage} alt="credenzLive" className="logo-img" /> */}
                <Animate />
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default Home;
