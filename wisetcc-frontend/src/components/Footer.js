import React from 'react';
import wisetccLogo from '../assets/wisetcc_logo.png';

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

      <div className="subscribe-form">
        <p>Join our mailing list below.</p>
        <form>
          <div className="form-group">
          <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
          </div>

          <div className="form-group">
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
          </div>

          <div className="form-group">
          <input type="email" id="email" name="email" placeholder="Email" required />
          </div>

          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;