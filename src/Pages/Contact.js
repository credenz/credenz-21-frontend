import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import "../CSS/ContactUs.css";
import { ReactComponent as Linkedinicon } from "../images/linkedin.svg";
import { ReactComponent as Mailicon } from "../images/mail.svg";
import { ReactComponent as Phoneicon } from "../images/phone.svg";
const Contact = () => {
  return (
    <Container fluid className="contactpage">
      <Row>
        <Col md="7">
          <Container>
            <Row>
              <Col xs="12" className="getintouch">
                Get in Touch
              </Col>
            </Row>
            <Row className="contactppl">
              <Col md="4" sm="6" className="mt-2">
                <div className="pplcont">
                  <Image
                    src="../Atharva.jpeg"
                    className="pplimages"
                    fluid
                    roundedCircle
                  />
                </div>

                <div className="mt-2"> Atharva Nephade </div>
                <div className="maillink mt-2">
                  <Container fluid className="socialicons" >
                    <Row>
                      <Col>
                        <a href="mailto:naphade21@gmail.com">
                          <Mailicon />
                        </a>
                      </Col>
                      <Col>
                        <a href="https://www.linkedin.com/in/atharva-naphade/">
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
              </Col>
              <Col md="4" sm="6" className="mt-2">
                <div className="pplcont">
                  <Image
                    src="../Nandini.jpeg"
                    className="pplimages"
                    fluid
                    roundedCircle
                  />
                </div>
                <div className="mt-2"> Nandini Patil </div>
                <div className="maillink mt-2">
                  <Container fluid className="socialicons" >
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
              </Col>
              <Col md="4" sm="6" className="mt-2">
                <div className="pplcont">
                  <Image
                    src="../Tanvi.jpeg"
                    className="pplimages"
                    fluid
                    roundedCircle
                  />
                </div>
                <div className="mt-2"> Tanvi Mane </div>
                <div className="maillink mt-2">
                  <Container fluid className="socialicons" >
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
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="feedbkfrm">
                FeedBack
              </Col>
            </Row>
            <Row>
              <Col>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Name"
                      className="fdbkfrm"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Type Message"
                      className="fdbkfrm"
                    />
                  </Form.Group>
                  <Button
                    className="mb-3 subbutton"
                    color="#FF5001"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md="5" className="pict-map">
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
      </Row>
    </Container>
  );
};

export default Contact;
