import React from 'react';
import './footer.css';
import {FaTwitterSquare} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";


function Footer() {
    return (
      <div className="footer">
        <div className="socialMedia">
            <div className="media-icons">
            <div className="twitter-icons"><FaTwitterSquare /></div>
            <br></br>
            <div className="tiktok-icons">< FaTiktok /></div>
            <br></br>
            <div className="ig-icons">< FaInstagramSquare /></div>
          </div>
        </div>
        <div className='footer-icon'>
          <p> &copy; 2022 KIMBERLYKOLLECTIONS.COM</p>
        </div>
      </div>
    );
  }
  
  export default Footer;
