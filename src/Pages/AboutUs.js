import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AboutCards from "../Components/AboutCards";
import AboutSponsors from "../Components/AboutSponsors";
import "../CSS/AboutUs.css";
import CodingNinjas from "../images/codingNinjas.jfif";
import CollegePond from "../images/collegePond.jfif";
import Proton from "../images/proton.png";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="aboutUs">
      <div
        className="aboutHeader"
        data-aos="zoom-in-up"
        data-aos-duration="100"
        data-aos-easing="ease-in-sine"
        data-aos-anchor-placement="top-center">
        <h1>About Us</h1>
      </div>

      <div className="aboutCards container">
        {/* About Cards */}
        <AboutCards></AboutCards>
      </div>

      <div className="aboutSponsors">
        {/* About Sponsors */}
        <h1
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine">
          Sponsors
        </h1>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-4">
            <div
              className="spons7 spons"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50">
              <AboutSponsors
                slink={CollegePond}
                href="https://www.collegepond.com/"
                sname="Higher Education Partner"></AboutSponsors>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="spons8 spons"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50">
              <AboutSponsors
                slink={Proton}
                href="https://protons.in/"
                sname="Training Partner"></AboutSponsors>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="spons9 spons"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50">
              <AboutSponsors
                slink={CodingNinjas}
                sname="Programming Partner"
                href="https://www.codingninjas.in/"></AboutSponsors>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
