import React, { useState } from "react";
import "../App.css";
import "../css/ContactPage.css";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      firstName,
      lastName,
      email,
      countryCode,
      phoneNumber,
      message,
    });
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleFormSubmit}>
        <div>
          <p>Name&ensp;(required)</p>
          <div className="name-container">
            <div>
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="email-label" htmlFor="email">Email&ensp;(required)</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <p>Phone&ensp;(required)</p>
          <div className="phone-container">
            <div>
              <label>Country Code</label>
              <input
                className="country-input"
                type="text"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
              />
            </div>
            <div>
              <label className="number-label">Phone Number</label>
              <input
                className="number-input"
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="message-label" htmlFor="message">Message&ensp;(required)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;