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
import Step1 from "./Step1"
import Step2 from "./Step2";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [step,setStep]=useState(0);

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
        {step === 0 && <Step1 />}
        {step === 1 && <Step2 />}
      </FormContainer>
      <Marginer direction="vertical" margin={30} />

      {step === 1 && (
        <>
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
        </>
      )}

      {step === 0 && (
        <button class="btn btn--secondary" type="submit">
          <span class="btn__content" onClick={(e) => setStep(1)}>
            Next
          </span>
          <span class="btn__glitch"></span>
        </button>
      )}
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
