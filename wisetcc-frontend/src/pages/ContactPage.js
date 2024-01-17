import React from "react";
import "../App.css";
import "../css/ContactPage.css";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  return (
    <div>
      <div className="contactpage-bg-img">
        <h1 className="headertext">CONTACT</h1>
      </div>
      <div className="contactpage-container">
        <div className="contact-details">
          <h2 className="headertext-contact">CONTACT</h2>
          <p>
            Opening Hours:
            <br />
            Monday to Friday: 9 am — 5 pm
            <br />
            <br />
            Phone: (65) 1234 5678
            <br />
            Email: info@wisetcc.com
            <br />
            <br />
            Address:
            <br />
            91 Tanglin Road
            <br />
            #04-07 Tanglin Place
            <br />
            Singapore 247918
          </p>
        </div>
        <div className="contact-form">
          {/* Ensure the ContactForm component is imported correctly */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;