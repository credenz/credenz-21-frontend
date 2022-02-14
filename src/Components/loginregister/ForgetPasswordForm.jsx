import React, { useState } from "react";
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
  const [emailSent, setEmailSent] = useState(false);

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
