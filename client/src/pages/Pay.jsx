import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import axios from "axios";
const KEY = "";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => setStripeToken(token);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          },
        );
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <StripeCheckout
        name="Neobonk"
        shippingAddress
        billingAddress
        amount={2000}
        description={"Youre total is 20$"}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            width: "200px",
            height: "40px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
        >
          Pay
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Pay;
