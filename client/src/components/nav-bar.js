// src/components/nav-bar.js

import React from 'react';
import AuthNav from './auth-nav.js';
// import TabBar from './tab-bar';
import { NavLink, Link } from "react-router-dom";
import "./nav-bar.css";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="auth0-button" />
          <AuthNav />
          {/* <TabBar /> */}
          <br></br>
          <div className="nav-links"> 
            <ul>
              <li>
                  <NavLink to="/"> Home Page</NavLink>
              </li>
              <li>
                  <NavLink to="/clothing"> Clothes</NavLink>
              </li>
              <li>
                  <NavLink to="/cart"> Checkout</NavLink>
              </li> 
            </ul> 

          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;