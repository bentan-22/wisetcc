import React from "react";
import "../App.css";
import "../css/Footer.css";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <footer className="footer-text">
      <div className="footer-content">
        <div className="footer-copyright">
          <p>&copy; 2024 WISETCC All rights reserved.</p>
        </div>
        <div className="footer-address">
          <p>
            91 Tanglin Road
            <br />
            #04-07 Tanglin Place
            <br />
            Singapore 247918
          </p>
        </div>
        <div className="footer-phone-email">
          <p>Contact: 123-456-7890</p>
          <p>Email: info@wisetcc.com</p>
        </div>
      </div>
      <SubscribeForm />
    </footer>
  );
};

export default Footer;