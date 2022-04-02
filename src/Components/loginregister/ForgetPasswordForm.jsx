import React, { useContext, useEffect, useState } from "react";
import swal from "sweetalert";
import { API } from "../../axios/API";
import "../../CSS/loginForm.css";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { BoxContainer, FormContainer, Input, MutedLink } from "./common";

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
  const { switchToSignin } = useContext(AccountContext);

  const [passwordError, setPasswordError] = useState(false);
  const validatePassword = (password) => {
    const reg =
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
    const re = new RegExp(reg);
    if (!re.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  // useEffect(() => {
  //   if (email.length > 3) {
  //     validateEmail(email);
  //   }
  //   if (password.length > 3) {
  //     validatePassword(password);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [email, email.length, password, password.length]);

  function ValidateEmail(mail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(mail)) {
      setEmailError(false);
      return true;
    } else {
      setEmailError(true);
      return false;
    }
  }

  const customErrorMessages = (err) => {
    const errArr = Object.values(err);
    let errMsg = "";
    errArr.forEach((err) => {
      errMsg += err + "\n";
    });
    return errMsg;
  };

  const sendVerificationToken = async () => {
    const validEmail = ValidateEmail(email);
    if (validEmail) {
      try {
        await API.passwordReset({ email });
        setEmailSent(true);
        swal("Email sent! Check yout mailbox.", "", "info");
      } catch (error) {
        const errMsg = customErrorMessages(error.response.data);
        // alert(JSON.stringify(err.response.data));
        swal("Error", errMsg, "error");
      }
    } else {
    }
  };

  const handleForgetPassword = async () => {
    try {
      API.passwordResetConfirm({
        token: token,
        password: password,
      })
        .then((res) => {
          swal("Password changed, you can login!", "", "success");
          // eslint-disable-next-line no-restricted-globals
          location.reload();
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
          className={!emailSent ? "input-disabled mb-2" : "mb-2"}
          disabled={!emailSent}
          type="string"
          placeholder="Verfication Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <Input
          className={!emailSent ? "input-disabled" : ""}
          disabled={!emailSent}
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span hidden={!passwordError} className="error-text">
          The password must contain atleast 1 capital aplhabet, 1 number and 1
          special character
        </span>
      </FormContainer>
      <Marginer direction="vertical" margin={70} />

      <button
        className="btn btn--secondary mb-1"
        type="submit"
        disabled={emailSent}
        onClick={sendVerificationToken}
      >
        <span className="btn__content">Send Verification Mail</span>
        <span className="btn__glitch"></span>
      </button>
      <button
        disabled={!emailSent}
        className="btn btn--secondary"
        type="submit"
        onClick={handleForgetPassword}
      >
        <span className="btn__content">Submit</span>
        <span className="btn__glitch"></span>
      </button>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink
        className="mb-3"
        style={{ cursor: "pointer" }}
        onClick={switchToSignin}
      >
        Back to Login
      </MutedLink>
    </BoxContainer>
  );
}
