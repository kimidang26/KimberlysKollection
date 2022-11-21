import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "./cart.css"

const Cart = () => {
  const [cart, setCart] = useState([]);
  const {user, isAuthenticated} = useAuth0();
  const [total, setTotal] = useState(0);
  

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


// **************Delete*************
  const handleDeleteItem = async (handleDeleteShirt) => {
    const response = await fetch(`api/cart/${handleDeleteShirt}`, {
      method: 'DELETE',
    })
    await response.json();
    const deleteItemFunction = cart.filter((clothes) => clothes.items_id !==handleDeleteShirt);
    setCart(deleteItemFunction);
    console.log("delete is here kim")
  }


  //********Getting price data to send to parent********/
  let sum = cart.reduce((acc, cur) => acc + Number(cur.price),0)
  console.log(sum);

// if user not logged in then show them auth 0
    return (
      <div className="card-deck" >
            <h1> This is a Cart component </h1>
            <div className="card-display">
                  {cart.map((clothes, index) => {
                  return (
                    <div className="card-group">
                      <div className="card">
                      <img className="card-img-top" src={clothes.img} alt="Card image cap" />
                      <div className="card-body">
                        <h5 className="card-title">{clothes.title}</h5>
                        <p className="card-text">Price: {clothes.price}</p> 
                        <button onClick={() => handleDeleteItem(clothes.items_id)}>DELETE</button>
                      </div>
                      </div>
                    </div>
                  );
                  })}
            </div>
            <h3>Total:${sum.toFixed(2)}</h3>
            {/* <br></br>
            <p>Total Items ({cart.length})</p> */}
          </div>
      
    )
  }

export default Cart;