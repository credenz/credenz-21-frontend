import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { API } from "../../axios/API";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [username, setUsername] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleSubmit = () => {
    API.loginUser({
      username: username,
      password: passwd,
    }).then(r => {

    })
  }
  
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Username or Email" value={username} onChange={e => setUsername(e.target.value)} />
        <Input type="password" placeholder="Password" value={passwd} onChange={e => setPasswd(e.target.value)} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <button class="btn btn--secondary" type="submit">
        Sign In
        <span class="btn__content">Sign In</span>
        <span class="btn__glitch"></span>
      </button>
      <button class="btn btn--secondary" type="submit" onClick={handleSubmit}>
        <span class="btn__content">Pay Now</span>
        <span class="btn__glitch"></span>
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
