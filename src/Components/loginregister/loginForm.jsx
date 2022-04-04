import React, { useContext, useState } from "react";
import { API } from "../../axios/API";
import "../../CSS/loginForm.css";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
} from "./common";
import swal from "sweetalert";
import CartContext from "../CartContext";

export function LoginForm(props) {
  const { switchToSignup, switchToForgetPassword } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState("");
  const cartContextValue = useContext(CartContext);

  const handleSubmit = () => {
    props.setLoading(true);
    API.getRefreshToken({
      username: username,
      password: passwd,
    })
      .then((res) => {
        localStorage.setItem("credenz_access_token", res.data.access);
        localStorage.setItem("credenz_username", username);
        localStorage.setItem("isLoggedIn", true);
        cartContextValue.setIsLoggedIn(true);
        // alert(`Welcome Back ${username} !`);
        swal(`Welcome Back, ${username}!`, "", "success")
          .then((val) => {
            window.location.reload();
          })
          .catch((err) => {
            console.error(err);
          });
        // eslint-disable-next-line no-restricted-globals
        props.setLoading(false);
      })
      .catch((err) => {
        props.setLoading(false);
        const errMsg = customErrorMessages(err.response.data);
        // alert(JSON.stringify(err.response.data));
        swal("Error", errMsg, "error");
      });
  };

  const customErrorMessages = (err) => {
    const errArr = Object.values(err);
    let errMsg = "";
    errArr.forEach((err) => {
      errMsg += err + "\n";
    });
    return errMsg;
  };

  return (
    <BoxContainer>
      <FormContainer className="p-4">
        <Input
          className="mb-2"
          type="email"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={passwd}
          onChange={(e) => setPasswd(e.target.value)}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink
        switchToSignup={switchToSignup}
        style={{ cursor: "pointer" }}
        onClick={switchToForgetPassword}
      >
        Forgot your password?
      </MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <button
        className="btn btn--secondary"
        type="submit"
        onClick={handleSubmit}
        disabled={!username || !passwd}
      >
        Sign In
        <span className="btn__content">Sign In</span>
        <span className="btn__glitch"></span>
      </button>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink className="mb-3" style={{ cursor: "pointer" }}>
        Don't have an account?{" "}
        <BoldLink onClick={switchToSignup}>Signup</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
