import React from 'react';
import { useState } from "react";
import Cart from './cart.js';

const checkout = () => {
    const [select, setSelect] = useState(null);

    let displayTyMessage;

    if (select = !null) {
        displayTyMessage = (
            <div>
                <h2> Thank you for your order!</h2>
                <br/>
                <br />
                <a href="http://localhost:4000/"><button>Back to Home</button></a>
            </div>
        )
    } else {
        let displayTyMessage = (
            <div>
                <Cart />
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

export default checkout;
