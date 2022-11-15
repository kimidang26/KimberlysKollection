import React, { useEffect, useState } from 'react';
import "./clothingitem.css";
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from "../authentication-button.js"
 


const Items = () => {

  const [shirts, setShirts] = useState([]); 
  const [cart, setCart] = useState([]);
  console.log("cart items", cart);
  // const {user} = useAuth0();
  const { isAuthenticated, user } = useAuth0();
  const { loginWithRedirect } = useAuth0();
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

  //sorting
  //sortstate is updated based on onclick on radio buttons
//handlesort use sort state to determine whether asc or desc
const handleSort = (evt) => {
  //need ... because we updated the state value . So we created a new array using ... and sorting and gives new array which replaces setshirt triggering a new rerender
  //without ... were modifying state value bypassing react, it does not rerender
    let sorted = [...shirts].sort((a,b) => {
      console.log(a.price);
      if (evt.currentTarget.value === 'asc'){
        return a.price - b.price;
      } else if(evt.currentTarget.value === 'desc'){
        return b.price - a.price;
      } else if(evt.currentTarget.value === 'rate'){
        return b.rating.rate - a.rating.rate;
      } else if (evt.currentTarget.value === 'clear'){
        return a.id - b.id;
      }
      
    });
    setShirts(sorted);
    console.log(handleSort, "line 63");
    console.log(evt.currentTarget.value);
  
}

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


    if(!user){
      return loginWithRedirect()
  } else { 


  return (
    <div className="card-deck">
      <div className='card-header'>
        <h1> Winter Season </h1>
        <h3> Vol. 1 </h3>
        <button>Total Items ({cart.length})</button>
        <div className='filter-condition'>
          <h4>Sort By : </h4>
          
          <select onChange={handleSort}>
            <option value='clear' name= 'price_sort' >Default</option>
            <option value='asc' name='price_sort' >Price: Low to High</option>
            <option value='desc' name='price_sort' >Price: High to Low</option>
            <option value='rate' name='price_sort' >Customer Review</option>
          </select>
        </div>

      </div>
     
        <div className="card-display">
              {shirts.map((shirt, index) => {
              return (
                <div className="card-group" key ={shirt.id}>
                  <div className="card">
                    <img className="card-img-top" src={shirt.image} alt="Card image cap" />
                    <div className="card-body">
                      <h5 className="card-title">{shirt.title}</h5>
                      <p className="card-text">Rating: {shirt.rating.rate}</p>
                      <p className="card-text">Price: {shirt.price}</p> 
                      <button onClick={() => addToCart(shirt)}>Add to Cart</button>
                    </div>
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