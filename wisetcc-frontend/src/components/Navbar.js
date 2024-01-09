import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/about" className="nav-item">About</Link>
        <div className="nav-wisetcc">WISETCC</div>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;