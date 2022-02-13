import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AccountBox } from "../Components/loginregister/index";
import { API } from "../axios/API";

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // background: rgb(238, 31, 32);
  // background: linear-gradient(
  //   297deg,
  //   rgba(238, 31, 32, 1) 0%,
  //   rgba(20, 20, 20, 1) 50%
  // );
  background: rgb(20, 20, 20);
  background: linear-gradient(
    297deg,
    rgba(20, 20, 20, 1) 29%,
    rgba(156, 20, 21, 1) 100%
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
