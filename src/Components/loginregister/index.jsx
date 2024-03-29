import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "../../CSS/Login.css";
import Loader from "../Loader";
import { AccountContext } from "./accountContext";
import { ForgetPasswordForm } from "./ForgetPasswordForm";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
  ${"" /* margin-left:1000px; */}
  width: 480px;
  min-height: 500px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border-image-source: url("img/square_red.png");
  border-image-slice: 20;
  border-image-width: 3;
  border-image-outset: 7;
  border-style: solid;
  border-image-repeat: round;

  ${"" /* border-radius: 20px; */}
  background-color: var(--primary);
  box-shadow: 0px 1px 6px #e01949;

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
  background: #9d1b3b;
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
  const history = useHistory();

  const checkToken = async () => {
    setLoading(true);
    let token = localStorage.getItem("credenz_access_token");
    if (token) {
      //if token then logged in = > push to home and remove login from nav
      history.push({
        pathname: "/home",
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

  const switchToForgetPassword = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("forgetPassword");
    }, 400);
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    switchToForgetPassword,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      {loading && (
        <div className="d-flex justify-content-center align-items-center height-full">
          <Loader />
        </div>
      )}
      <div className="mt-4 container-fluid row">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center ">
          {/* <Image
            src={CredenzLive}
            className="logo-login-page"
            style={{ height: "350px", width: "350px" }}
          /> */}
          {/* <div className="color-light" style={{ fontSize: "1.5rem" }}>
            Sponsored By Proton
          </div> */}
        </div>
        <div className="col-md-12  d-flex justify-content-center align-items-center">
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
              {active === "signin" && (
                <LoginForm loading={loading} setLoading={setLoading} />
              )}
              {active === "signup" && (
                <SignupForm loading={loading} setLoading={setLoading} />
              )}
              {active === "forgetPassword" && <ForgetPasswordForm />}
            </InnerContainer>
          </BoxContainer>
        </div>
      </div>
    </AccountContext.Provider>
  );
}
