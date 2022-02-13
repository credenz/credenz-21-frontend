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

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleSubmit = () => {
    API.getRefreshToken({
      username: username,
      password: passwd,
    })
      .then((res) => {
        console.log("Logged in!", res);
        localStorage.setItem("credenz_access_token", res.data.access);
        localStorage.setItem("credenz_username", username);
        alert(`Welcome Back ${username} !`);
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
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
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <button
        className="btn btn--secondary"
        type="submit"
        onClick={handleSubmit}
      >
        Sign In
        <span className="btn__content">Sign In</span>
        <span className="btn__glitch"></span>
      </button>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink className="mb-3" href="#">
        Don't have an account?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
