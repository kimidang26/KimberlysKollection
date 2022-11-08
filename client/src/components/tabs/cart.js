import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [clothes, setClothes] = useState([]);
  const {user} = useAuth0();


  const addToCart = async (garment) => {
    console.log('we are in user cart kamily')
    console.log(user.sub)
    setClothes([...clothes, garment])

      const userCart = {
        sub: user.sub,
        id: garment.id,
      }

    }

  //gets items from cart
  const getCart = () => {
    fetch('/api/cart')
    .then((response) => response.json())
    .then((cart) => {
      setCart(cart);
    });
}
  
  useEffect(() => {
    getCart();
  }, []);

// if user not logged in then show them auth 0
    return (
      <div className="card-deck">
            <h1> This is a Cart component </h1>
            <div className="card">
                  {cart.map((clothes, index) => {
                  return (
                    <div>
                      <img className="card-img-top" src={clothes.image} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">{clothes.title}</h5>
                        <p className="card-text">Price: {clothes.price}</p> 
                        <p className="card-text">ID {clothes.product_id}</p> 
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