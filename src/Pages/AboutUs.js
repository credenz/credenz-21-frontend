import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AboutCards from "../Components/AboutCards";
import AboutSponsors from "../Components/AboutSponsors";
import "../CSS/AboutUs.css";
import BudhaniBros from "../images/BudhaniBros.png";
import ChanakyaMP from "../images/ChanakyaMandalPariwar.png";
import CionDigital from "../images/CionDigital.svg";
import CodingNinjas from "../images/codingNinjas.jfif";
import Converge from "../images/convergeLogo.png";
import ImperialOE from "../images/Imperial.png";
import KatrajDairy from "../images/katrajdairy_1.jpg";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="aboutUs">
      <div className="aboutHeader">
        <h1
          data-aos="zoom-in-up"
          data-aos-duration="500"
          data-aos-easing="linear"
          data-aos-anchor-placement="top-center"
        >
          About Us
        </h1>
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
          data-aos-easing="ease-in-sine"
        >
          Sponsors
        </h1>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-6">
            <div
              className="spons9 spons"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50"
            >
              <AboutSponsors
                slink={CionDigital}
                sname="Title Sponsor"
                href="https://www.ciondigital.com/"
              ></AboutSponsors>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="spons7 spons"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50"
            >
              <AboutSponsors
                slink={Converge}
                href="https://www.convergeapp.co"
                sname="Event Partner"
              ></AboutSponsors>
            </div>
          </div>
        </div>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-4">
            <div
              className="spons9 spons"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50"
            >
              <AboutSponsors
                slink={ImperialOE}
                sname="Event Partner"
                href="https://www.imperial-overseas.com/"
              ></AboutSponsors>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="spons9 spons"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50"
            >
              <AboutSponsors
                slink={ChanakyaMP}
                sname="Educational Partner"
                href="https://chanakyamandal.org/"
              ></AboutSponsors>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="spons8 spons"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50"
            >
              <AboutSponsors
                slink={CodingNinjas}
                href="https://www.codingninjas.in/"
                sname="Clash Sponsor"
              ></AboutSponsors>
            </div>
          </div>
        </div>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-6">
            <div
              className="spons9 spons"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50"
            >
              <AboutSponsors
                slink={BudhaniBros}
                sname="Food Partner"
                href="https://www.budhanibros.com/"
              ></AboutSponsors>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="spons9 spons"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-easing="ease-in-sine"
              data-aos-offset="50"
            >
              <AboutSponsors
                slink={KatrajDairy}
                sname="Food Partner"
                href="https://katrajdairy.com"
              ></AboutSponsors>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
