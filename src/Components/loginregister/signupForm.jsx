import React, { useContext, useState, useEffect } from "react";
import { Ippopay } from "react-ippopay";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import "../../CSS/Login.css";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [ippoState, setIppoState] = useState({
    ippopayOpen: false,
    order_id: "YOUR_ORDER_ID",
    public_key: "YOUR_PUBLIC_KEY",
  });

  const ippopayHandler = (e) => {
    if (e.data.status == "success") {
      console.log(e.data);
    }
    if (e.data.status == "failure") {
      console.log(e.data);
    }
  };
  window.addEventListener("message", ippopayHandler);

  const ippopayOpen = () => {
    setIppoState({ ippopayOpen: true });
  };

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
      <Marginer direction="vertical" margin={30} />
      <button class="btn btn--secondary" type="submit">
        <span class="btn__content">Sign Up</span>
        <span class="btn__glitch"></span>
      </button>
      <button
        class="btn btn--secondary"
        type="submit"
        onClick={(e) => ippopayOpen(e)}
      >
        <span class="btn__content">Pay Now</span>
        <span class="btn__glitch"></span>
      </button>
      <Ippopay
        ippopayOpen={ippoState.ippopayOpen}
        ippopayClose={true}
        order_id={ippoState.order_id}
        public_key={ippoState.public_key}
      />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink className="mb-3" href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
