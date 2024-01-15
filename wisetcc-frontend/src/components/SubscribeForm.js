import React from "react";
import "../App.css";
import "../css/Footer.css";

const SubscribeForm = () => {
  return (
    <div className="subscribe-form">
      <p>Join our mailing list below.</p>
      <form>
        <div className="subscribe-form-group">
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            required
          />
        </div>
        <div className="subscribe-form-group">
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="subscribe-form-group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <button type="submit" >Subscribe</button>
      </form>
    </div>
  );
};

export default SubscribeForm;
