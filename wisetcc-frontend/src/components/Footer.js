import React from 'react';
import '../App.css';
import '../css/Footer.css';
import wisetccLogo from '../assets/wisetcc_logo.png';
import SubscribeForm from './SubscribeForm'; 

const Footer = () => {
  return (
    <footer className="footer-text">
      <div className="footer-content">
        <div className="left-section">
          <p>&copy; 2024</p>
          <img src={wisetccLogo} alt="WISETCC Logo" className="wisetcc-logo" />
          <p>All rights reserved.</p>
        </div>

        <div className="middle-section">
          <p>123 Random Address</p>
        </div>

        <div className="right-section">
          <p>Contact: 123-456-7890</p>
          <p>Email: info@wisetcc.com</p>
        </div>
      </div>
      <SubscribeForm />
    </footer>
  );
}

export default Footer;