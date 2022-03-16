import React, { useEffect, useState } from "react";
// import bootstrap
import { Col, Container, Row } from "react-bootstrap";
import CopyPassword from "../Components/CopyPassword";
import Loader from "../Components/Loader";
// import css
import "../CSS/profile.css";
// event logo
import logo from "../logo.png";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const user = {
    name: "Karan Lakhwani",
    college: "Pune Institute of Computer Technology",
    email: "karan.lakhwani23@gmail.com",
    contact: "+91 8329049174",
    userName: "karan0910",
    registeredEvents: [
      { eventName: "Enigma", password: "df8en24rr23hr" },
      { eventName: "RC", password: "df8en24rr23hr" },
      { eventName: "Clash", password: "df8en24rr23hr" },
      { eventName: "NTH", password: "df8en24rr23hr" },
      { eventName: "Pixelate", password: "df8en24rr23hr" },
      { eventName: "Wallstreet", password: "df8en24rr23hr" },
    ],
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center styleLoader">
          <Loader />
        </div>
      ) : (
        <div className="profile-page">
          <Container>
            <h2>Profile</h2>
            <Row>
              <Col sm={12} lg={4}></Col>
            </Row>
          </Container>
          {user.registeredEvents.length > 0 ? (
            <div className="registered-events">
              <h3 className="heading">Registered Events</h3>
              <Container fluid>
                <Row>
                  {user.registeredEvents.map((event) => {
                    return (
                      <Col lg={4} md={6} sm={12}>
                        <div className="registered-event-card">
                          <div>
                            <img
                              className="event-logo"
                              src={logo}
                              width="200px"
                              alt="logo"
                            />
                          </div>
                          <h1>{event.eventName}</h1>
                          <div className="event-password">
                            <CopyPassword password={event.password} />
                          </div>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </div>
          ) : (
            <h2>You don't have any registered events! </h2>
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
