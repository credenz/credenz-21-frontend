import React from "react";
import '../CSS/ContactUs.css'

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" getintouch col-md-6">
          <h1><strong>Get in Touch</strong></h1>
          <h3>SCTR's Pune Institute of Computer Tehnology, Dhankawadi, Pune 411043<br />Maharashtra, India</h3>
        </div>
        <div className="pict-map col-md-6">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254197!2d73.84864491506187!3d18.457542087445784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR'S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1603520633684!5m2!1sen!2sin" width="100%" height="100%" frameborder="0" aria-hidden="false" tabindex="0" title="iframe"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
