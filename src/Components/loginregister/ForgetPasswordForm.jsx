import React, { useState } from "react";
import { useEffect } from "react";
import { API } from "../../axios/API";
import "../../CSS/loginForm.css";
import { Marginer } from "../marginer";
import { BoxContainer, FormContainer, Input } from "./common";

export function ForgetPasswordForm(props) {
  // eslint-disable-next-line no-unused-vars
  const localDetails = props.userDetails;
  // eslint-disable-next-line no-unused-vars
  const [userDetails, setUserDetails] = useState(null);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const validateEmail = (password) => {
    const reg =
      '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
    const re = new RegExp(reg);
    console.log("password", email);
    console.log("pass?", re.test(email));
    if (!re.test(password)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const [passwordError, setPasswordError] = useState(false);
  const validatePassword = (password) => {
    const reg =
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
    const re = new RegExp(reg);
    console.log("password", password);
    console.log("pass?", re.test(password));
    if (!re.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  useEffect(() => {
    if(email.length > 3) {
      validateEmail(email);
    }
    if (password.length > 3) {
      validatePassword(password);
    }
  }, [email, email.length, password, password.length]);

  const sendVerificationToken = async () => {
    try {
      await API.passwordReset({ email });
      setEmailSent(true);
      alert("Email sent! Check yout mailbox.");
    } catch (error) {
      console.error(error);
    }
  };

  const handleForgetPassword = async () => {
    try {
      API.passwordResetConfirm({
        token: token,
        password: password,
      })
        .then((res) => {
          alert("Password changed, you can login!");
        })
        .catch((err) => {});
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <BoxContainer className="p-4">
      <FormContainer>
      <span hidden={!emailError} className="error-text">
          Please enter a valid E-Mail id.
        </span>
        <Input
          disabled={emailSent}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Marginer direction="vertical" margin={20} />
        <Input
          className="mb-2"
          type="string"
          placeholder="Verfication Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <Input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span hidden={!passwordError} className="error-text">
          The password must contain atleast 1 aplhabet, 1 number and 1 special
          character
        </span>
      </FormContainer>
      <Marginer direction="vertical" margin={70} />

      <button
        className="btn btn--secondary mb-1"
        type="submit"
        onClick={sendVerificationToken}
      >
        <span class="btn__content">Send Verification Mail</span>
        <span class="btn__glitch"></span>
      </button>
      <button
        className="btn btn--secondary"
        type="submit"
        onClick={handleForgetPassword}
      >
        <span class="btn__content">Submit</span>
        <span class="btn__glitch"></span>
      </button>
    </BoxContainer>
  );
}
