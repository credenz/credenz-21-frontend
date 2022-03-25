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

 
  background: rgb(50, 42, 42);
  background: radial-gradient(
    circle,
    rgba(50, 42, 42, 1) 0%,
    rgba(20, 20, 20, 1) 53%
  );
`;

const LoginRegister = () => {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
};

export default LoginRegister;
