import React, { useEffect, useState } from 'react';
import "./clothingitem.css";
 


const Items = () => {

  const [shirts, setShirts] = useState([]); 
  const [cart, setCart] = useState([]);
  console.log("cart items", cart);

  const addToCart = (shirt) => {
    console.log('we are in cart')
    setCart([...cart, shirt])

  };

//get and fetch the data
  const getItems = () =>{
    fetch("http://localhost:2026/clothing")
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
      <button>Go to cart ({cart.length})</button>
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