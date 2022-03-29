import React, { useContext, useState } from "react";
import swal from "sweetalert";
import { API } from "../../axios/API";
import "../../CSS/Login.css";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { BoldLink, BoxContainer, FormContainer, MutedLink } from "./common";
import Step1 from "./Step1";
import Step2 from "./Step2";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const [step, setStep] = useState(0);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
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
  const [isSenior, setIsSenior] = useState(false);

  const handleSignUp = () => {
    props.setLoading(true);
    API.registerUser({
      fullname: fname + lname,
      username: username,
      password: passwd1,
      email: email,
      profile: {
        phone_no: phone,
        country_code: ccode,
        ieee_member: isIeeeMember,
        ieee_member_id: ieeeId || 0,
        institute: isPictian ? "PICT" : college,
        senior: isSenior,
      },
    })
      .then((res) => {
        swal("You have been registered successfully!", "", "success");
        localStorage.setItem("credenz_username", res.data.username);
        props.setLoading(false);
      })
      .catch((e) => {
        props.setLoading(false);
        // alert(JSON.stringify(e.response.data));
        swal("Error", JSON.stringify(e.response.data), "error");
      });
  };

  return (
    <BoxContainer>
      <FormContainer>
        {step === 0 && (
          <Step1
            lname={lname}
            fname={fname}
            username={username}
            email={email}
            ccode={ccode}
            phone={phone}
            passwd1={passwd1}
            passwd2={passwd2}
            setFname={setFname}
            setLname={setLname}
            setUsername={setUsername}
            setEmail={setEmail}
            setCcode={setCcode}
            setPhone={setPhone}
            setPasswd1={setPasswd1}
            setPasswd2={setPasswd2}
          />
        )}
        {step === 1 && (
          <Step2
            step={step}
            setStep={setStep}
            isIeeeMember={isIeeeMember}
            ieeeId={ieeeId}
            isPictian={isPictian}
            college={college}
            setIsIeeeMember={setIsIeeeMember}
            setIeeeId={setIeeeId}
            setIsPictian={setIsPictian}
            setCollege={setCollege}
            isSenior={isSenior}
            setIsSenior={setIsSenior}
          />
        )}
      </FormContainer>
      <Marginer direction="vertical" margin={30} />

      {step === 1 && (
        <>
          <button
            className="btn btn--secondary"
            type="submit"
            onClick={handleSignUp}
          >
            <span className="btn__content">Sign Up</span>
            <span className="btn__glitch"></span>
          </button>
          {/* <button
            className="btn btn--secondary"
            type="submit"
            onClick={displayRazorpay}
            disabled={!enablePayment}>
            <span className="btn__content">Pay Now</span>
            <span className="btn__glitch"></span>
          </button> */}
        </>
      )}

      {step === 0 && (
        <button className="btn btn--secondary" type="submit">
          <span
            className="btn__content"
            onClick={(e) => {
              passwd1 === passwd2
                ? setStep(1)
                : swal("Error", "Passwords don't match!", "error");
            }}
          >
            Next
          </span>
          <span className="btn__glitch"></span>
        </button>
      )}
      <Marginer direction="vertical" margin="1em" />
      <MutedLink className="mb-3" style={{ cursor: "pointer" }}>
        Already have an account?
        <BoldLink onClick={switchToSignin}>Signin</BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
