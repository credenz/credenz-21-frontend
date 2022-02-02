import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import "../CSS/ContactUs.css";

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
              <Col sm="4" className="mt-2">
                <Image
                  src="../onkar.jpg"
                  className="pplimages"
                  fluid
                  roundedCircle
                />
                <div> Omkar Litke </div>
                <div className="maillink">
                  {" "}
                  <a href="mailto:jr.onkarlitake@gmail.com">
                    jr.onkarlitake@gmail.com
                  </a>
                  <br />
                  +91 988114969
                </div>
              </Col>
              <Col sm="4" className="mt-2">
                <Image
                  src="../durvesh.jpg"
                  className="pplimages"
                  fluid
                  roundedCircle
                />
                <div> Durvesh Malpure </div>
                <div className="maillink">
                  {" "}
                  <a href="mailto:durveshmalpurecoc@gmail.com">
                    durveshmalpurecoc@gmail.com
                  </a>
                  <br />
                  +91 9172952268
                </div>
              </Col>
              <Col sm="4" className="mt-2">
                <Image
                  src="../rohan.jpeg"
                  className="pplimages"
                  fluid
                  roundedCircle
                />
                <div> Rohan Pawar </div>
                <div className="maillink">
                  {" "}
                  <a href="mailto:rohanpawar1999@gmail.com">
                    rohanpawar1999@gmail.com
                  </a>
                  <br />
                  +91 9834570868
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs="12" className="getintouch">
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
