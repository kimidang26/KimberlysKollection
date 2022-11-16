import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const History = () => {
  const [history, setHistory] = useState([]);
  const {user, isAuthenticated} = useAuth0();

  //gets items from history
  const getHistory = () => {
    //gets dont have a body so we have to pass it as query parameters which is $=
    fetch(`/api/history?sub=${user.sub}`)
    .then((response) => response.json())
    .then((history) => {
      setHistory(history);
      console.log(history);
    });
}

useEffect(() => {
  if(isAuthenticated) {
    getHistory(history);
  }
 }, [isAuthenticated]);


    return (
      <h1>
        This is the history component
      </h1>
    )
  }

  export default History;