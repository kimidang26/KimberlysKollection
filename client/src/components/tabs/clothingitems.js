import React, { useEffect, useState } from 'react';
import "./clothingitem.css";
import { useAuth0 } from "@auth0/auth0-react";
 


const Items = () => {

  const [shirts, setShirts] = useState([]); 
  const [cart, setCart] = useState([]);
  console.log("cart items", cart);
  const {user} = useAuth0();
  // console.log("user id:" , user.sub);

  const addToCart = async (shirt) => {
    console.log('we are in cart')
    console.log(user.sub)
    setCart([...cart, shirt])

      const newAdd = {
        sub: user.sub,
        id: shirt.id,
      }

      //DATA FROM USER
      console.log(newAdd, "Added New Items Here Kimberly");

      //POST where it sends item and sub/id to server
      const response = await fetch('/api/clothing/additems', {
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newAdd)
      });
      const content = await response.json();
      //DATA FROM SERVER
      console.log(content,"kimberly here");


  };

//get and fetch the data
  const getItems = () =>{
    fetch("/api/clothing")
      .then((response) => response.json())
      .then((shirts) => {
        setShirts(shirts);
      });
  }
  
    useEffect(() => {
      getItems();
    }, []);


    if(!shirts){
      return <div>Loading...</div>
  } else { 


  return (
    <div className="card-deck">
      <h1> This is a Items component </h1>
      <button>Total Items ({cart.length})</button>
      <div className="card">
            {shirts.map((shirt, index) => {
            return (
              <div>
                <img className="card-img-top" src={shirt.image} alt="Card image cap" />
                 <div className="card-body">
                  <h5 className="card-title">{shirt.title}</h5>
                  <p className="card-text">Rating: {shirt.rating.rate}</p>
                  <p className="card-text">Price: {shirt.price}</p> 
                  <button onClick={() => addToCart(shirt)}>Add to Cart</button>
                </div>
              </div>
            );
            })}
      </div>
    </div>

  )
}
}


export default Items;