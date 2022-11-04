import React, { useState } from 'react';
import Items from "./tabs/clothingitems";
import History from './tabs/orderhistory';
import Cart from './tabs/cart';


const Home = () => {
    return (
      <h1>
        This is a Home component
      </h1>
    )
  }
  
  
  const TabBar = () =>  {
    const [currentView, setCurrentView] = useState('home');
    return (
      <>
        <div>
          <button onClick={() => setCurrentView('home')}>Home</button>
          <button onClick={() => setCurrentView('items')}>Items</button>
          <button onClick={() => setCurrentView('cart')}> Cart</button>
          <button onClick={() => setCurrentView('history')}> Order History</button>
          <br />
        </div >
        {currentView === 'home' && <Home />}
        {currentView === 'cart' && <Cart />}
        {currentView === 'items' && <Items />}
        {currentView === 'history' && <History />}
      </>
    )
  }
  
  export default TabBar;