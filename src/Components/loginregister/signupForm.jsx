import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <div class="row">
          <div class="col-md-6">
            <Input type="text" placeholder="Full Name" />
          </div>
          <div class="col-md-6">
            <Input type="text" placeholder="Username" />
          </div>
        </div>

        <Input type="email" placeholder="Email" />
        <Input type="number" placeholder="Phone" />

        <div class="row">
          <div class="col-md-6">
            <Input type="password" placeholder="Password" />
          </div>
          <div class="col-md-6">
            <Input type="password" placeholder="Confirm Password" />
          </div>
        </div>
       
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
