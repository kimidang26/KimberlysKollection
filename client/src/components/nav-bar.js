// src/components/nav-bar.js

import React from 'react';
import AuthNav from './auth-nav';
import TabBar from './tab-bar';

const NavBar = () => {
  return (
    <div className="nav-container mb-3">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand logo" />
          <AuthNav />
          <h6> Add Ternaray Operator</h6>
          <TabBar />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;