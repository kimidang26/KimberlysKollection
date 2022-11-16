// src/components/nav-bar.js

import React from 'react';
import AuthNav from './auth-nav.js'
// import TabBar from './tab-bar';
import { NavLink, Link } from "react-router-dom";
import "./nav-bar.css";
import Logo from "../images/Logo.png";
import ClothingStore from "../images/ClothingStore.mp4";
import { useAuth0 } from '@auth0/auth0-react';


const NavBar = ({displayVideo}) => {



  return (

    //only do header with video when display video is true
    //need another ternary statement
    <div className={displayVideo? `header header--with-video` : `header`}>
      <div className="nav-container mb-3">
    {/* only do navbar with video when display video is true
    need another ternary statement */}
        <nav className={displayVideo? `navbar navbar-expand-md navbar--with-video` : `navbar navbar-expand-md`}>
          <div className="brand-logo">
            <img src={Logo} alt="Kimberly-Kollection-Logo" />
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
                      <NavLink to="/history"> Order History</NavLink>
                  </li> 
                  <li>
                    <AuthNav />
                  </li>
                </ul> 

            </div>
          </div>
        </nav>
      </div>
 {/* // only display if displayvideo is true, create ternary */}
  {displayVideo ? (<iframe
        width="1500"
        height="1000"
        src="https://www.youtube.com/embed/YKaiXY7zHxk?controls=0&autoplay=1&mute=1&rel=0&loop=1"
        title="YouTube video player"
        loop = "true"
        autoplay = "true"
        frameborder="10"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: -5,
        }}
      ></iframe>) : null}
      
    </div>
  );
};

export default NavBar;