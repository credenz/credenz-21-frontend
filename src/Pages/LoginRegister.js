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
 
  vertical-align: middle;
  background-repeat: no-repeat;
  z-index: 101;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("img/website bg.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
 
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
  
     <AppContainer className="temp">
     
      <AccountBox />
      <br/><br/>
    </AppContainer> 
   
  );
};

export default LoginRegister;
