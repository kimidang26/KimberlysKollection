import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "../tabs/orderhistory.css";



const History = () => {
  const [history, setHistory] = useState([]);
  const {user, isAuthenticated} = useAuth0();

  //gets items from history
  const getHistory = () => {
    //gets dont have a body so we have to pass it as query parameters which is $=
    const newAdd = {
      sub: user.sub,
    }


    fetch(`/api/history?sub=${user.sub}`)
    .then((response) => response.json())
    .then((history) => {
      setHistory(history);
      console.log(history, "history here");
    });
}

useEffect(() => {
  if(isAuthenticated) {
    getHistory(history);
  }
 }, [isAuthenticated]);


    return (
      <div className="order_history">
      <h1>Order History</h1>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Item</th>
            <th>Item Title</th>
            <th>Order ID</th>
          </tr>
        </thead>
        <tbody>
          {history.map((his, index) => {
            return (
              <tr key = {index}>
                <td>{his.created_on.slice(0,10)}</td>
                <td> <img src={his.img} alt="Shirt" width="100px" /></td>
                <td>{his.title}</td>
                <td>{his.order_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </div>
    )
  }

  export default History;