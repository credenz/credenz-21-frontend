import React, { useContext, useState } from "react";
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
  const [enablePayment, setEnablePayment] = useState(false);
  const [isSenior, setIsSenior] = useState(false);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePaymentSuccess = async (response) => {
    try {
      let bodyData = new FormData();

      // we will send the response we've got from razorpay to the backend to validate the payment
      bodyData.append("response", JSON.stringify(response));

      API.verifyPayment(bodyData)
        .then((res) => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
          alert(`Payment successful!`);
          //RESET THE LOCAL STATE
        })
        .catch((err) => {});
    } catch (error) {}
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    try {
      let { data: orderData } = await API.payment({ username });
      const options = {
        key: "rzp_test_jIVmcYuQhbIa7k", // Enter the Key ID generated from the Dashboard
        amount: orderData.payment.amount_due.toString(),
        currency: orderData.payment.currency,
        name: "Credenz Live 2.0 Payment",
        description: "Test Transaction",
        order_id: orderData.payment.id,
        handler: async function (response) {
          handlePaymentSuccess(response);
        },
        prefill: {
          name: fname,
          email: email,
          contact: phone,
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {}
  };

  const handleSignUp = () => {
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
        setEnablePayment(true);
        alert(
          "You have been registered!, Pay using the Pay Now button or login later with the credentials to pay later."
        );
        localStorage.setItem("credenz_username", res.data.username);
      })
      .catch((e) => {
        console.log("Error", e.response.data);
        alert(JSON.stringify(e.response.data));
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
          <button
            className="btn btn--secondary"
            type="submit"
            onClick={displayRazorpay}
            disabled={!enablePayment}
          >
            <span class="btn__content">Pay Now</span>
            <span class="btn__glitch"></span>
          </button>
        </>
      )}

      {step === 0 && (
        <button className="btn btn--secondary" type="submit">
          <span
            className="btn__content"
            onClick={(e) => {
              passwd1 === passwd2
                ? setStep(1)
                : alert("Passwords don't match!");
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
