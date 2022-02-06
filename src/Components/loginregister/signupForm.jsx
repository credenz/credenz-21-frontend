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
import { API } from "../../axios/API";

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

  const [fname, setFname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [ccode, setCcode] = useState("91");
  const [phone, setPhone] = useState("");
  const [passwd1, setPasswd1] = useState("");
  const [passwd2, setPasswd2] = useState("");
  const [isIeeeMember, setIsIeeeMember] = useState(false);
  const [ieeeId, setIeeeId] = useState("");
  const [isPictian, setIsPictian] = useState(false);
  const [college, setCollege] = useState("");

  const handleSignUp = () => {
    API.registerUser({
      firstname: fname,
      username: username,
      email: email,
      country_code: ccode,
      phone: phone,
      password: passwd1,
      isIeeeMember: isIeeeMember,
      ieeeId: ieeeId,
      isPictian: isPictian,
      college: college,
    }).then(r => {

    })
  }

  return (
    <BoxContainer>
      <FormContainer>
        {step === 0 && <Step1 fname={fname} username={username} email={email} ccode={ccode} phone={phone} passwd1={passwd1} passwd2={passwd2} setFname={setFname} setUsername={setUsername} setEmail={setEmail} setCcode={setCcode} setPhone={setPhone} setPasswd1={setPasswd1} setPasswd2={setPasswd2} />}
        {step === 1 && <Step2 isIeeeMember={isIeeeMember} ieeeId={ieeeId} isPictian={isPictian} college={college} setIsIeeeMember={setIsIeeeMember} setIeeeId={setIeeeId} setIsPictian={setIsPictian} setCollege={setCollege} />}
      </FormContainer>
      <Marginer direction="vertical" margin={30} />

      {step === 1 && (
        <>
          <button class="btn btn--secondary" type="submit" onClick={handleSignUp}>
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
          <span class="btn__content" onClick={(e) => { passwd1 === passwd2 ? setStep(1) : alert("Passwords don't match!") }}>
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
