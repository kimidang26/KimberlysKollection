import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const {user, isAuthenticated} = useAuth0();
  

  //gets items from cart
  const getCart = () => {
    //gets dont have a body so we have to pass it as query parameters which is $=
    fetch(`/api/cart?sub=${user.sub}`)
    .then((response) => response.json())
    .then((cart) => {
      setCart(cart);
      console.log(cart);
    });
}
  

  useEffect(() => {
   if(isAuthenticated) {
    getCart(cart);
   }
  }, [isAuthenticated]);


// if user not logged in then show them auth 0
    return (
      <div className="card-deck">
            <h1> This is a Cart component </h1>
            <div className="card">
                  {cart.map((clothes, index) => {
                  return (
                    <div>
                      <img className="card-img-top" src={clothes.img} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">{clothes.title}</h5>
                        <p className="card-text">Price: {clothes.price}</p> 
                        {/* <button onClick={() => addToCart(shirt)}>Add to Cart</button> */}
                      </div>
                    </div>
                  );
                  })}
            </div>
          </div>
      
    )
  }

export default Cart;