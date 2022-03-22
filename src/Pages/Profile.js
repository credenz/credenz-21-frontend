import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import "../CSS/profile.css";
import ProfileIcon from "../images/user.png";
import CallIcon from "../images/phone-receiver-silhouette.png";
import EmailIcon from "../images/email.png";
import EventCard2 from "../Components/EventCard2";
import RC from "../images/rc.png";
import EventCard3 from "../Components/EventCard3";
import { API } from "../axios/API";

const Profile = () => {
  const height = "65px";
  const width = "65px";
  const [loading, setLoading] = useState(true);
  const user = {
    name: "Sanket Kulkarni",
    email: "sanketkulkani@gmail.com",
    contact: "+91 9921167376",
    userName: "Sanketak08",
    registeredEvents: [
      { eventName: "Enigma", password: "df8en24rr23hr" },
      { eventName: "RC", password: "df8en24rr23hr" },
      { eventName: "Clash", password: "df8en24rr23hr" },
      { eventName: "NTH", password: "df8en24rr23hr" },
      { eventName: "Pixelate", password: "df8en24rr23hr" },
      { eventName: "Wallstreet", password: "df8en24rr23hr" },
      { eventName: "NTH", password: "df8en24rr23hr" },
      { eventName: "Pixelate", password: "df8en24rr23hr" },
      { eventName: "Wallstreet", password: "df8en24rr23hr" },
    ],
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState(false);

  const fetchProfileDetails = async () => {
    let token = localStorage.getItem("credenz_access_token");
    let username = localStorage.getItem("credenz_username");
    if (token) {
      API.getUserDetails(username)
        .then((res) => {
          setUserDetails(res.data);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProfileDetails();
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center styleLoader">
          <Loader />
        </div>
      ) : (
        <div className="bg-dark2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="personalCardContainer">
                  <div className="personalCard">
                    <div className="userContainer my-5 flex-column d-flex justify-content-center align-items-center">
                      <div className="imgContainer"></div>
                      <div className="userName mt-4">{user.userName}</div>
                    </div>
                    <div className="itemContainer">
                      <div className="itemRow">
                        <img
                          src={ProfileIcon}
                          alt="Profile icon"
                          style={{ marginRight: 10 }}
                          className="commonIcon"
                        />
                        <p className="detailText" style={{ margin: 0 }}>
                          {user.name}
                        </p>
                      </div>
                      <div className="itemRow">
                        <img
                          src={EmailIcon}
                          alt="Email icon"
                          style={{ marginRight: 10 }}
                          className="commonIcon"
                        />
                        <p className="detailText" style={{ margin: 0 }}>
                          {user.email}
                        </p>
                      </div>
                      <div className="itemRow">
                        <img
                          src={CallIcon}
                          alt="Call icon"
                          style={{ marginRight: 10 }}
                          className="commonIcon"
                        />
                        <p className="detailText" style={{ margin: 0 }}>
                          {user.contact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8">
                <div className="heading">
                  <h2>My Events</h2>
                </div>
                {user.registeredEvents.length > 0 ? (
                  <div className="secondContainer">
                    <div className="row d-flex flex-row justify-content-evenly flex-wrap">
                      {user.registeredEvents.map((col, i) => (
                        <EventCard3
                          icon={RC}
                          width={width}
                          height={height}
                          title={col.eventName}
                          text="Hone your problem-solving skills by decrypting complex questions"
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div
                    className="m-5 d-flex justify-content-center align-items-center"
                    style={{ color: "#fff" }}>
                    Not registered for any event
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
