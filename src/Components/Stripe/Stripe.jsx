import "./App.css";
import StripeCheckout from "react-stripe-checkout";

function Stripe() {
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <div className="Stripe">
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51NYrslAt2wKTt6mgEUMrcxXP5t5spkpIwVN84zojvwLmVHvXNMPZDAMLKs2IV7zdvXj9wCoXhcqjVD786Iz38Jb100dUNTQeyg"
      />
    </div>
  );
}

export default Stripe;
