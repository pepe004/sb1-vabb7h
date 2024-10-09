import { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

export default function DonationForm({ creatorId }) {
  const [amount, setAmount] = useState(5);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount, creatorId }),
    });

    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Payment succeeded, update the database
      // You can call an API route to update the creator's balance and create a donation record
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        min="1"
      />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Donate ${amount}
      </button>
    </form>
  );
}