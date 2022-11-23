import React from 'react';
import { useState } from "react";
import Cart from './cart.js';
import { useAuth0 } from "@auth0/auth0-react";
import "../tabs/checkout.css";
import { Link } from "react-router-dom";


const Checkout = () => {
    const [select, setSelect] = useState(null);
    const {user} = useAuth0();
    


    //POST Pt.1
    const changeOrder = async () => {
        console.log(user.sub)
        setSelect(true);

        const changeSub = {
            sub:user.sub
        }

     //POST Pt.2
    //POST where it sends item and sub/id to server
    const response = await fetch('/completeOrder', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(changeSub)
    });
    const content = await response.json();
    //DATA FROM SERVER
    console.log(content,"kimberly post is here for changing user order to complete");
};



    let displayTyMessage;

    //if Purchase/Select button is not empty (is clicked) show the message
    if (select === true) {
        displayTyMessage = (
            <div className='Thanks-Message'>
                <h2> Your order is in! Thank you for shopping at Kimberly's Kollection. See you soon!</h2>
                <br/>
                <br />
                <p>Click <Link to="/">Here</Link> to go back to home.</p>
                <br></br>
            </div>
        )
    } else {
        displayTyMessage = (
            <div>
                <Cart />
                {/* <h3>Total:  </h3> */}
                <button className="purchase" onClick={changeOrder}>Purchase </button>
                <br></br>
            </div>
        )
    }

  return (
    <div className="checkout_page">
      {displayTyMessage}
      <br></br>
    </div>
  );
};

export default Checkout;
