// src/components/nav-bar.js

import React from 'react';
import AuthNav from './auth-nav';
// import TabBar from './tab-bar';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <AuthNav />
          <h6> Add Ternaray Operator</h6>
          {/* <TabBar /> */}
          <div className="navigation"> 
              <br></br>
                  <Link to="/"> Home Page</Link>
              <br></br>
              <br></br>
                  <Link to="/clothing"> Items</Link>
              <br></br>
              {/* <br></br>
                  <Link to="/about"> About</Link>
              <br></br>
              <br></br>
                  <Link to="/contact"> Contact</Link> */}
              <br></br>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;