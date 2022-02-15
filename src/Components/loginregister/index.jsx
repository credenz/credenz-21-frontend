import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Image, Toast } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { API } from "../../axios/API";
import "../../CSS/Login.css";
import Cross from "../../images/close-line.png";
import CredenzLive from "../../images/credenzlive2.0_1.png";
import { AccountContext } from "./accountContext";
import { LoginForm } from "./loginForm";
import { PaymentForm } from "./PaymentForm";
import { SignupForm } from "./signupForm";
import { ForgetPasswordForm } from "./ForgetPasswordForm";

const BoxContainer = styled.div`
  ${"" /* margin-left:1000px; */}
  width: 480px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: var(--primary);
  box-shadow: 0px 2px 10px rgba(255, 0, 60, 1);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -285px;
  left: -70px;
  z-index: 10;
  background: var(--orange);
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1155px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "500px",
    borderRadius: "50%",
    transform: "rotate(-22deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");
  // eslint-disable-next-line no-unused-vars
  const [paymentDone, setPaymentDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPaymentToast, setShowPaymentToast] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const history = useHistory();

  const checkToken = async () => {
    setLoading(true);
    let token = localStorage.getItem("credenz_access_token");
    let username = localStorage.getItem("credenz_username");
    if (token) {
      API.getUserDetails(username)
        .then((res) => {
          setUserDetails(res.data);
          if (res.data.payment === "PO") {
            setPaymentDone(false);
            setShowPaymentToast(true);
            setActive("payment");
            setTimeout(() => {
              setShowPaymentToast(false);
            }, 3500);
            // show payment button - Handeled ✔
          } else if (res.data.payment === "CO") {
            setPaymentDone(true);
            //redirect to events page
            // history.push("/events", { userDetails: res.data });
            history.push({
              pathname: "/",
              state: { userDetails: res.data },
            });
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
    setLoading(false);
  };

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const switchToPayment = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("payment");
    }, 400);
  };

  const switchToForgetPassword = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("forgetPassword");
    }, 400);
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    switchToPayment,
    switchToForgetPassword,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <div className="toast-container" hidden={!showPaymentToast}>
        <Toast show={showPaymentToast}>
          <Toast.Header>
            <strong className="me-auto">Credenz Live 2.0</strong>
            <img
              src={Cross}
              className="rounded me-2 close toast-close"
              alt=""
              data-dismiss="toast"
              height={"10px"}
              onClick={() => setShowPaymentToast(false)}
            />
          </Toast.Header>
          <Toast.Body>Please proceed to payment to continue!</Toast.Body>
        </Toast>
      </div>
      <div className="login-preloader" hidden={!loading}></div>
      <div class="mt-4 container-fluid row">
        <div class="col-md-6 d-flex flex-column justify-content-center align-items-center imagectdlog">
          <Image
            src={CredenzLive}
            class="image-fluid"
            style={{ height: "350px", width: "350px" }}
          />
          {/* <div className="color-light" style={{ fontSize: "1.5rem" }}>
            Sponsored By Proton
          </div> */}
        </div>
        <div class="col-md-6  d-flex justify-content-center align-items-center">
          <BoxContainer>
            <TopContainer>
              <BackDrop
                initial={false}
                animate={isExpanded ? "expanded" : "collapsed"}
                variants={backdropVariants}
                transition={expandingTransition}
              />
              {active === "signin" && (
                <HeaderContainer>
                  <HeaderText>Welcome</HeaderText>
                  <HeaderText>Back</HeaderText>
                  <SmallText>Please sign-in to continue!</SmallText>
                </HeaderContainer>
              )}
              {active === "signup" && (
                <HeaderContainer>
                  <HeaderText>Create</HeaderText>
                  <HeaderText>Account</HeaderText>
                  <SmallText>Please sign-up to continue!</SmallText>
                </HeaderContainer>
              )}
              {active === "payment" && (
                <HeaderContainer>
                  <HeaderText>Welcome</HeaderText>
                  <HeaderText>Back</HeaderText>
                  <SmallText>Please proceed to Payment to continue!</SmallText>
                </HeaderContainer>
              )}
              {active === "forgetPassword" && (
                <HeaderContainer>
                  <HeaderText>Please Enter your Email</HeaderText>
                  <HeaderText>To Continue</HeaderText>
                  <SmallText>
                    A verification code will be sent on your Email
                  </SmallText>
                </HeaderContainer>
              )}
            </TopContainer>
            <InnerContainer>
              {active === "signin" && <LoginForm />}
              {active === "signup" && <SignupForm />}
              {active === "payment" && (
                <PaymentForm userDetails={userDetails} />
              )}
              {active === "forgetPassword" && <ForgetPasswordForm />}
            </InnerContainer>
          </BoxContainer>
        </div>
      </div>
    </AccountContext.Provider>
  );
}
