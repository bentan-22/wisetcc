import React, { useState } from "react";
import '../App.css';
import '../css/Forms.css';

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
      phone: `+${countryCode} ${phoneNumber}`,
      message,
    });
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="contact-form">
        <p>
          Name <small>(required)</small>
        </p>
        <div className="name-container">
          <div className="name-row">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="name-row">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email <small>(required)</small>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <p>
          Phone <small>(required)</small>
        </p>
        <div className="phone-container">
          <div>
            <label htmlFor="countryCode">Country</label>
            <select
              id="countryCode"
              name="countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              required
            >
              {/* Add options for country codes */}
            </select>
          </div>
          <div>
            <label htmlFor="phoneNumber">Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Message <small>(required)</small>
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;