import React from 'react';
import { useState } from "react";
import Cart from './cart.js';

const Checkout = () => {
    const [select, setSelect] = useState(null);
    const [total, setTotal] = useState(0);
    
    const finalPrice = () => {
        setTotal()
    }

    //need a put request

    let displayTyMessage;

    //if Purchase/Select button is not empty (is clicked) show the message
    if (select == !null) {
        displayTyMessage = (
            <div>
                <h2> Your order is in! Thank you for shopping at A+ Clothing Store. See you soon!</h2>
                <br/>
                <br />
                <a href="http://localhost:4000/"><button>Back to Home</button></a>
            </div>
        )
    } else {
        displayTyMessage = (
            <div>
                <Cart />
                <h3>Total:  </h3>
                <button className="purchase" onClick={() => setSelect(true)}>Purchase </button>
            </div>
        )
    }

  return (
    <div className="checkout_page">
      {displayTyMessage}
    </div>
  );
};

export default Checkout;
