import React, { useState } from 'react';
import axios from 'axios';
import './Payment.css'
function PaymentForm() {
  const [cardHolderName, setcardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send card details to server
        const baseUrl = "http://localhost:3000//Payment";
        const data = {cardHolderName,cardNumber,expiryDate,cvv};
        const result = await axios.post(baseUrl, data);
        console.log(result.data);
        alert("Payment done succesfully")
        window.location.reload(true)      
  };

  return (
    <>
    <form className="paybox">
    <h4>Debit/Credit Card details </h4>
        <label>
        Card Holder Name
        <br/>
        <input className='cardInput' type="text" value={cardHolderName} onChange={(e) => setcardHolderName(e.target.value)} required/>
      </label>
      <br />
      <label>
        Card Number
        <br/>
        <input  className='cardInput' type="number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required/>
      </label>
        <br/>
      <label>
        Expiry Date
        <br/>
        <input  className='cardInput' type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required/>
      </label>
        <br/>
      <label>
        CVV
        <br/>
        <input  className='cardInput' type="number" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
      </label>
      <br />
      <button type="submit" onClick={handleSubmit} className='btn btn-primary pay'>Pay</button>
    </form>
    </>
  );
  }

export default PaymentForm;
