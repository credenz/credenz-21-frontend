import React from "react";
import { Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../CSS/footer.css";
import Facebook from "../images/facebook.png";
import Insta from "../images/instagram.png";
import LinkedIn from "../images/linkedin.png";
export const Footer = (props) => {
  return (
    <div
      className={
        props.stickyBottom ? "footer-main sticky-bottom" : "footer-main"
      }
    >
      <Row className="footer-row">
        <div className="branch-text col-md-4">© PICT IEEE Student Branch</div>
        <div className="social-wrapper col-md-4">
          <a
            href="https://www.instagram.com/pictieee/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Insta} alt="Instagram" className="social-icons me-3" />
          </a>
          <a
            href="https://www.linkedin.com/company/pisbieee/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="Instagram" className="social-icons me-3" />
          </a>
          <a
            href="https://www.facebook.com/pictieee/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} alt="Instagram" className="social-icons me-3" />
          </a>
        </div>
        <div className="terms col-md-4">
          <NavLink to={"/terms"} className="terms-text">
            Terms of Service
          </NavLink>
        </div>
        <div className="footer-wrapper"></div>
      </Row>
    </div>
  );
};
