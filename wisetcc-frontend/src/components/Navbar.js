import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitterSquare } from 'react-icons/fa';
import '../App.css';
import wisetccLogo from '../assets/wisetcc_logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-section">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/" className="nav-item">
          <img src={wisetccLogo} alt="WISETCC Logo" className="wisetcc-logo" />
        </Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </div>
      <div className="social-icons">
        <FaFacebook className="social-item" />
        <FaInstagram className="social-item" />
        <FaTwitterSquare className="social-item" />
      </div>
    </nav>
  );
}

export default Navbar;