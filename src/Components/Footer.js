import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../CSS/footer.css";
import Insta from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import LinkedIn from "../images/linkedin.png";
export const Footer = (props) => {
  return (
    <div
      className={
        props.stickyBottom ? "footer-main sticky-bottom" : "footer-main"
      }
    >
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <div className="footer-wrapper">
          <div className="branch-text">© PICT IEEE Student Branch</div>
          <div className="social-wrapper">
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
              <img
                src={LinkedIn}
                alt="Instagram"
                className="social-icons me-3"
              />
            </a>
            <a
              href="https://www.facebook.com/pictieee/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={Facebook}
                alt="Instagram"
                className="social-icons me-3"
              />
            </a>
          </div>
        </div>
      </Row>
    </div>
  );
};
