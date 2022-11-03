import React, { useEffect, useState } from 'react';
import "./clothingitem.css";
 


const Items = () => {
  const [shirts, setShirts] = useState([]); 

//get and fetch the data
  const getItems = () =>{
    fetch("http://localhost:2626/clothing")
      .then((response) => response.json())
      .then((shirts) => {
        setShirts(shirts);
      });
  }
  
    useEffect(() => {
      getItems();
    }, []);


  // useEffect(async () => {
  //   await fetch("http://localhost:2626/clothing")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setShirts(data);
        
  //     });
  // }, []);

  const addShirts = (newShirts) => {
    setShirts((shirts) => [...shirts, newShirts]);
  };

  //post to add the items to cart
  const postAddItems = (newAddItem) => {
    return fetch("http://localhost:2626/additems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAddItem),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Add item to cart ", data);
        getItems();
      });
  };

  if(!shirts){
        return <div>Loading...</div>
    } else { 


    return (
      <div className="card-deck">
        <h1> This is a Items component </h1>
        <div className="card">
              {shirts.map((shirt, index) => {
              return (
                <div>
                  <img className="card-img-top" src={shirt.image} alt="Card image cap" />
                   <div className="card-body">
                    <h5 className="card-title">{shirt.title}</h5>
                    <p className="card-text">Rating: {shirt.rating.rate}</p>
                    <p className="card-text">Price: {shirt.price}</p> 
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