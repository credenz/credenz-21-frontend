import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: #fff;
  font-weight: 500;
  text-decoration: none;

  &:focus {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgba(255, 0, 60, 1);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  background-color: #231f20;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  // border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  color: #fff;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #fff;
  }
  :-ms-input-placeholder {
    color: #fff;
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(255, 0, 60, 1);
  }
  &::webkit-input-placeholder {
    color: #fff;
  }
`;
