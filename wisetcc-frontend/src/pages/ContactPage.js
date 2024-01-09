import React, { useState } from "react";
import "../App.css";

const ContactPage = () => {
  const [salutation, setSalutation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [query, setQuery] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      salutation,
      name,
      email,
      contactNumber,
      query,
    });
  };

  return (
    <div className="contactpage">
      <div className="headertext"><h1>Contact Us</h1></div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="salutation">Salutation:</label>
          <select
            id="salutation"
            value={salutation}
            onChange={(e) => setSalutation(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="Enter your number"
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="query">Query:</label>
          <textarea
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your query"
          />
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactPage;
