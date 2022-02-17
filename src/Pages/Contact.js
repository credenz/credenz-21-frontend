import AOS from "aos";
import "aos/dist/aos.css";
import { default as React, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  Row,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";
import "../CSS/AboutUs.css";
import "../CSS/ContactUs.css";
import { ReactComponent as Linkedinicon } from "../images/linkedin.svg";
import { ReactComponent as Mailicon } from "../images/mail.svg";
import { ReactComponent as Phoneicon } from "../images/phone.svg";

const Contact = () => {
  const [feedname, setFeedname] = useState("");
  const [feedmsg, setFeedmsg] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const handleFeedback = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("Name", feedname);
    data.append("Message", feedmsg);
    const url =
      "https://script.google.com/macros/s/AKfycbwCB9OXgvvbC6vVsNNPTFta2686AOtqmaJTk_ySHqAX8D1Ts6ZWyM4LnScsOKq_OSAv/exec";
    setSending(true);
    fetch(url, {
      method: "POST",
      body: data,
    }).then(() => {
      setFeedname("");
      setFeedmsg("");
      setSending(false);
      alert("Your feedback has been succesfully submitted!");
    });
  };

  return (
    <>
      <div
        className="aboutHeader"
        data-aos="zoom-in-up"
        data-aos-duration="100"
        data-aos-easing="ease-in-sine"
        data-aos-anchor-placement="top-center"
      >
        <h1>Contact Us</h1>
      </div>
      <Container fluid className="contactpage">
        <Row>
          <Col md="7">
            <Container>
              <Row className="contactppl">
                <Col
                  lg="4"
                  sm="6"
                  className="mt-2"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="0"
                >
                  <div className="pplcard">
                    <div className="pplcont">
                      <Image
                        src="../Atharva.jpeg"
                        className="pplimages"
                        fluid
                        roundedCircle
                      />
                    </div>

                    <div className="mt-2"> Atharva Naphade </div>
                    <div className="maillink mt-2 mb-2">
                      <Container fluid className="socialicons">
                        <Row>
                          <Col>
                            <a href="mailto:naphade21@gmail.com">
                              <Mailicon />
                            </a>
                          </Col>
                          <Col>
                            <a href="https://www.atharvanaphade.me/">
                              <Linkedinicon />
                            </a>
                          </Col>
                          <Col>
                            <a href="tel:+91 94237 54562">
                              <Phoneicon />
                            </a>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </Col>
                <Col
                  lg="4"
                  sm="6"
                  className="mt-2"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="200"
                >
                  <div className="pplcard">
                    <div className="pplcont">
                      <Image
                        src="../Nandini.jpeg"
                        className="pplimages"
                        fluid
                        roundedCircle
                      />
                    </div>
                    <div className="mt-2"> Nandini Patil </div>
                    <div className="maillink mt-2 mb-2">
                      <Container fluid className="socialicons">
                        <Row>
                          <Col>
                            <a href="mailto:nspatil5601@gmail.com">
                              <Mailicon />
                            </a>
                          </Col>
                          <Col>
                            <a href="https://www.linkedin.com/in/nandini-patil-5601">
                              <Linkedinicon />
                            </a>
                          </Col>
                          <Col>
                            <a href="tel:+91 93079 48342">
                              <Phoneicon />
                            </a>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </Col>
                <Col
                  lg="4"
                  sm="6"
                  className="mt-2"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-sine"
                  data-aos-offset="400"
                >
                  <div className="pplcard">
                    <div className="pplcont">
                      <Image
                        src="../Tanvi.jpeg"
                        className="pplimages"
                        fluid
                        roundedCircle
                      />
                    </div>
                    <div className="mt-2"> Tanvi Mane </div>
                    <div className="maillink mt-2 mb-2">
                      <Container fluid className="socialicons">
                        <Row>
                          <Col>
                            <a href="mailto:tanvi21501@gmail.com">
                              <Mailicon />
                            </a>
                          </Col>
                          <Col>
                            <a href="https://www.linkedin.com/in/tanvimane-">
                              <Linkedinicon />
                            </a>
                          </Col>
                          <Col>
                            <a href="tel:+91 70208 36169">
                              <Phoneicon />
                            </a>
                          </Col>
                        </Row>
                      </Container>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  xs="12"
                  className="feedbkfrm"
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-sine"
                >
                  FeedBack
                </Col>
              </Row>
              <Row>
                <Col
                  data-aos="fade-right"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-sine"
                >
                  <Form onSubmit={handleFeedback}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        className="fdbkfrm"
                        value={feedname}
                        onChange={(e) => setFeedname(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Type Message"
                        className="fdbkfrm"
                        value={feedmsg}
                        onChange={(e) => setFeedmsg(e.target.value)}
                      />
                    </Form.Group>
                    <Button
                      className="mb-3 subbutton"
                      color="#cf1818"
                      type="submit"
                    >
                      {sending ? (
                        <>
                          <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                          />
                          &nbsp; Sending...
                        </>
                      ) : (
                        <>Submit</>
                      )}
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col
            md="5"
            className="pict-map"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-sine"
            data-aos-offset="200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5761897254197!2d73.84864491506187!3d18.457542087445784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eac85230ba47%3A0x871eddd0a8a0a108!2sSCTR'S%20Pune%20Institute%20of%20Computer%20Technology!5e0!3m2!1sen!2sin!4v1603520633684!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameborder="0"
              aria-hidden="false"
              tabindex="0"
              title="iframe"
            ></iframe>
          </Col>
          <Footer />
          <div className="maillink mt-2 mb-2">
                      <Container fluid className="socialicons">
                        <Row>
                          <Col>
                            <a href="https://razorpay.com/privacy/">
                              Privacy Policy
                            </a>
                          </Col>
                          <Col>
                            <a href="https://razorpay.com/terms/#:~:text=The%20User%20may%20receive%20or,of%20the%20User%2C%20financial%20and">
                              Terms and Conditions
                            </a>
                          </Col>
                          <Col>
                            <p>
                              For Refunds and cancellations contact +91 93079 48342.
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </div>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
