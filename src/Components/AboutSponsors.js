import React from "react";
import "../CSS/AboutSponsors.css";

function AboutSponsors({ slink, sname, href }) {
  return (
    <div className="aboutSponsor">
      <a href={href}>
        <img src={slink} alt="SponsorLogo"></img>
      </a>
      <h4 className="sponsors-text">{sname}</h4>
    </div>
  );
}

export default AboutSponsors;
