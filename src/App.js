import logo from "./logo.svg";
import "./App.css";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";

function App() {
  const [value, setValue] = useState({
    name: "Nayeem",
    product :"laptop",
    price: 120100,
    quality: "good",
  });

  function tokenFunc(token) {
    const body = {
      token,
      value,
    };
    const headers = {
      "content-type": "application/json",
    };
    fetch("http://localhost:4000/api/v1/payment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <div className="App">
      <StripeCheckout
        stripeKey={process.env.REACT_APP_STRIPE_SECRATE}
        name="Nayeem Production"
        price={value.price}
        token={tokenFunc}
      >
        <button>Buy something</button>
      </StripeCheckout>
    </div>
  );
}

export default App;
