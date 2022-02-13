import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../../axios/API";
import "../../CSS/loginForm.css";
import { Marginer } from "../marginer";
import { BoxContainer } from "./common";

export function PaymentForm(props) {
  // eslint-disable-next-line no-unused-vars
  const history = useHistory();
  const localDetails = props.userDetails;
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserDetails = async () => {
    try {
      const { data } = await API.getUserById(localDetails.user_id);
      setUserDetails(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (localDetails !== null || userDetails === null) {
      fetchUserDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          //RESET THE LOCAL STATE
          //   history.push("/", { userDetails });
          alert(`Payment successful!`);
          // eslint-disable-next-line no-restricted-globals
          location.reload();
          //   window.open("/events", "_self");
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
      let { data: orderData } = await API.payment({
        username: userDetails.username,
      });
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
          name: userDetails.username || "",
          email: userDetails.email || "",
          contact: userDetails.profile.phone_no || "",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <BoxContainer>
      <Marginer direction="vertical" margin={70} />
      <button
        className="btn btn--secondary"
        type="submit"
        onClick={displayRazorpay}
      >
        <span class="btn__content">Pay Now</span>
        <span class="btn__glitch"></span>
      </button>
    </BoxContainer>
  );
}
