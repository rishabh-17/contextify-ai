import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const CheckoutForm = ({ userId, tokens }) => {
  const [sessionId, setSessionId] = useState(null);
  const config = {
    headers: {
      authentication: `${localStorage.getItem("token")}`,
    },
  };
  const handleClick = async (event) => {
    event.preventDefault();

    const { data } = await axios.post(
      (import.meta.env.VITE_BACKEND_URL || "") +
        "/api/user/create-checkout-session",
      {
        userId,
        tokens,
      },
      config
    );

    setSessionId(data.session.id);

    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.session.id });
  };

  return <button onClick={handleClick}>Buy Tokens</button>;
};

const App = () => {
  const location = useLocation();
  const config = {
    headers: {
      authentication: `${localStorage.getItem("token")}`,
    },
  };
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const sessionId = query.get("session_id");
    const userId = query.get("user_id");
    const tokens = query.get("tokens");
    console.log(sessionId, userId, tokens);

    if (sessionId && userId && tokens) {
      axios.post(
        (import.meta.env.VITE_BACKEND_URL || "") + "/api/user/payment-success",
        { sessionId, tokens: parseInt(tokens) },
        config
      );
    }
  }, []);

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm userId="someUserId" tokens={10} />
    </Elements>
  );
};

export default App;
