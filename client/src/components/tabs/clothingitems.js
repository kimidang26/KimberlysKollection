import React, { useEffect, useState } from 'react';

 


const Items = () => {
  const [shirts, setShirts] = useState([]); 
  const [boys, setBoys] = useState([]); 

  useEffect(() => {
    fetch("http://localhost:2626/womensclothing")
      .then((response) => response.json())
      .then((data) => {
        setShirts(data);
        
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:2626/mensclothing")
      .then((response) => response.json())
      .then((data) => {
        setBoys(data);
        
      });
  }, []);


  if(!shirts || !boys){
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
                    <p className="card-text">{shirt.rating.rate}</p>
                    <p className="card-text">{shirt.price}</p> 
                  </div>
                </div>
              );
              })}
        </div>

        <div className="card">
          {boys.map((boy, index) => {
          return (
            <div>
              <img className="card-img-top" src={boy.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{boy.title}</h5>
                <p className="card-text">{boy.rating.rate}</p>
                <p className="card-text">{boy.price}</p> 
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