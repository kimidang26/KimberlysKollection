// src/components/nav-bar.js

import React from 'react';
import AuthNav from './auth-nav.js';
// import TabBar from './tab-bar';
import { NavLink, Link } from "react-router-dom";
import "./nav-bar.css";
import Logo from "../images/Logo.png";

const NavBar = () => {
  return (
    <div className ="header">
        <div className="nav-container mb-3">
          <nav className="navbar navbar-expand-md">
              <div className ="brand-logo">
                <img src={Logo} alt="Kimberly-Kollection-Logo"  />
              </div>
            <div className="container">
              <div className="auth0-button" />
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
                  <li>
                    <AuthNav />
                  </li>
                </ul> 

              </div>
            </div>
          </nav>
        </div>
    </div>
  );
};

export default NavBar;