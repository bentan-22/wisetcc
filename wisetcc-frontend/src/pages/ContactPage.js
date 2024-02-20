import React from "react";
import "../App.css";
import "../css/ContactPage.css";
import ContactForm from "../components/ContactForm";

const ContactPage = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  console.log("API Key:", apiKey);

  return (
    <div>
      <div className="contactpage-bg-img">
        <h1 className="headertext">CONTACT</h1>
      </div>
      <div className="contactpage-container">
        <div className="contact-details-and-map">
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
          <div className="google-map">
            <iframe
              title="Location"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=91+Tanglin+Road+Singapore`}
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;