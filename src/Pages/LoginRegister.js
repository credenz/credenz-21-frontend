import React from "react";
import styled from "styled-components";
import { AccountBox } from "../Components/loginregister/index";

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 56px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  z-index: 2;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  /* position: relative;
  display: inline-block;
  width: 100%; */
  vertical-align: middle;
  background-repeat: no-repeat;
  z-index: 101;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  background-image: url("img/website bg.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: #111; */
  /* background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("../images/hex.gif"); */
  background-position: center 0px;

  ${
    "" /* background: rgb(50, 42, 42);
  background: radial-gradient(
    circle,
    rgba(50, 42, 42, 1) 0%,
    rgba(20, 20, 20, 1) 53%
  ); */
  }
`;

const LoginRegister = () => {
  return (
  
     <AppContainer>
     
      <AccountBox />
    </AppContainer> 
   
  );
};

export default LoginRegister;
