import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import AboutCards from "../Components/AboutCards";
import AboutSponsors from "../Components/AboutSponsors";
import "../CSS/AboutUs.css";

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
        data-aos-anchor-placement="top-center"
      >
        <h1>About Us</h1>
      </div>

      <div className="aboutCards">
        {/* About Cards */}
        <AboutCards></AboutCards>
      </div>

      <div className="aboutSponsors d-none">
        {/* About Sponsors */}
        <h1
          data-aos="zoom-in"
          data-aos-duration="100"
          data-aos-easing="ease-in-sine"
        >
          OUR ESTEEMED SPONSORS
        </h1>
        <div className="aboutSpons">
          <div
            className="spons1 spons"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            data-aos-offset="50"
          >
            <AboutSponsors
              slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
              sname="sponsorname"
            ></AboutSponsors>
          </div>
          <div
            className="spons2 spons"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            data-aos-offset="50"
          >
            <AboutSponsors
              slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
              sname="sponsorname"
            ></AboutSponsors>
          </div>
          <div
            className="spons3 spons"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            data-aos-offset="50"
          >
            <AboutSponsors
              slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
              sname="sponsorname"
            ></AboutSponsors>
          </div>
          <div
            className="spons4 spons"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            data-aos-offset="50"
          >
            <AboutSponsors
              slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
              sname="sponsorname"
            ></AboutSponsors>
          </div>
          <div
            className="spons5 spons"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            data-aos-offset="50"
          >
            <AboutSponsors
              slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
              sname="sponsorname"
            ></AboutSponsors>
          </div>
          <div
            className="spons6 spons"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            data-aos-offset="50"
          >
            <AboutSponsors
              slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
              sname="sponsorname"
            ></AboutSponsors>
          </div>
          <div
            className="spons7 spons"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            data-aos-offset="50"
          >
            <AboutSponsors
              slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
              sname="sponsorname"
            ></AboutSponsors>
          </div>
          <div
            className="spons8 spons"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            data-aos-offset="50"
          >
            <AboutSponsors
              slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
              sname="sponsorname"
            ></AboutSponsors>
          </div>
          <div
            className="spons9 spons"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            data-aos-offset="50"
          >
            <AboutSponsors
              slink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKV3hJrxSfK8zRefbvWHYF-Zqiom0k0hXigw&usqp=CAU"
              sname="sponsorname"
            ></AboutSponsors>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="row justify-content-center">
          © PICT IEEE Student Branch
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
