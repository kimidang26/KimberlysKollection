import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  //gets items from cart
  const getCart = () => {
    fetch('http://localhost:2620/cart')
    .then((response) => response.json())
    .then((cart) => {
      setCart(cart);
    });
}
  
  useEffect(() => {
    getCart();
  }, []);


    return (
     
      <div className="card-deck">
         <div>
            <h2>Cart Stuff</h2>
            {/* <p>{cart.product_id}</p> */}
        </div>
        {cart.map((piece,index) => {
            return (
              <div className="card" style="width: 18rem;">
                    {/* <img className="card-img-top" src={piece.image} alt="Card image cap" /> */}
                  <div className="card-body">
                        <h5 className="card-title">{piece.product_id}</h5>
                          {/* <p className="card-text">Rating: {piece.rating.rate}</p>
                          <p className="card-text">Price: {piece.price}</p>  */}
                  </div>
              </div>
          );
        })}
    </div>
      
    )
  }

export default Cart;