import React, { useState } from "react";
import Stripe from "stripe";

const stripe = new Stripe("YOUR_STRIPE_API_KEY");

function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: {
          number: cardNumber,
          exp_month: expiryMonth,
          exp_year: expiryYear,
          cvc: cvc,
        },
      });
      console.log(paymentMethod);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(event) => setCardNumber(event.target.value)}
      />
      <input
        type="text"
        placeholder="Expiry Month"
        value={expiryMonth}
        onChange={(event) => setExpiryMonth(event.target.value)}
      />
      <input
        type="text"
        placeholder="Expiry Year"
        value={expiryYear}
        onChange={(event) => setExpiryYear(event.target.value)}
      />
      <input
        type="text"
        placeholder="CVC"
        value={cvc}
        onChange={(event) => setCvc(event.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Pay"}
      </button>
    </form>
  );
}

export default PaymentForm;
