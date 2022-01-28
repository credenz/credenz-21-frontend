import React from "react";
import styled from "styled-components";
import { AccountBox } from "../Components/loginregister/index";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginRegister = () => {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
};

export default LoginRegister;
