import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import '../App.css';
import '../css/Navbar.css';
import wisetccLogo from '../assets/wisetcc_logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-section">
        <NavLink exact to="/" className="nav-item-home">HOME</NavLink>
        <NavLink to="/about" className="nav-item">ABOUT</NavLink>
        <NavLink to="/services" className="nav-item">SERVICES</NavLink>
        <NavLink to="/contact" className="nav-item">CONTACT</NavLink>
      </div>
      <div className="nav-section">
        <NavLink to="/">
          <img src={wisetccLogo} alt="WISETCC Logo" className="wisetcc-logo" />
        </NavLink>
      </div>
      <div className="book-appointment">
        <NavLink to="/appointment" className="nav-item">BOOK APPOINTMENT</NavLink>
      </div>
      <div className="social-icons">
        <FaFacebook className="social-item" />
        <FaInstagram className="social-item" />
        <FaYoutube className="social-item" />
        <FaTiktok className="social-item" />
      </div>
    </nav>
  );
}

export default Navbar;