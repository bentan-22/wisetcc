import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../App.css";
import "../css/AppointmentPage.css";

function generateTimeSlots() {
  const slots = [];
  const startTime = new Date();
  startTime.setHours(9, 0);

  const endTime = new Date();
  endTime.setHours(18, 0);

  const lunchStart = new Date();
  lunchStart.setHours(12, 0);

  const lunchEnd = new Date();
  lunchEnd.setHours(13, 0);

  const currentTime = new Date(startTime);

  while (currentTime < endTime) {
    if (
      currentTime.getHours() !== 12 &&
      !(currentTime >= lunchStart && currentTime < lunchEnd)
    ) {
      slots.push(
        currentTime.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        })
      );
    }
    currentTime.setMinutes(currentTime.getMinutes() + 30);
  }

  return slots;
}

function AppointmentPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [consultationPurpose, setConsultationPurpose] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const productName = searchParams.get("productName");
    const productCode = searchParams.get("productCode");

    if (productName && productCode) {
      setConsultationPurpose(`Enquire about ${productName} (${productCode})`);
    }
  }, [location.search]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Reset selected time when the date changes
    setSelectedTime(null);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const appointmentData = {
        firstName,
        lastName,
        email,
        countryCode,
        phoneNumber,
        selectedDate,
        selectedTime,
        consultationPurpose,
        message,
      };
      const url = "/api/appointments"; // Check if this URL matches the backend route
      console.log("Sending POST request to:", url); // Log the URL
      const response = await axios.post("/api/appointments", appointmentData);
      console.log("Appointment booked:", response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="appointment-page-container">
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleFormSubmit}>
        <div className="appt-name-container">
          <div>
            <label>First Name&ensp;(required)</label>
            <input
              className="appt-firstname-input"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Last Name&ensp;(required)</label>
            <input
              className="appt-lastname-input"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="appt-email-container">
          <label>Email&ensp;(required)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="appt-phone-container">
          <div>
            <label>Country Code&ensp;(required)</label>
            <input
              className="appt-country-input"
              type="text"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="appt-number-label">
              Phone Number&ensp;(required)
            </label>
            <input
              className="appt-number-input"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="calendar-time-container">
          <div className="calendar-container">
            <label>Date&ensp;(required)</label>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              minDate={new Date()}
              required
            />
          </div>

          <div className="time-slots-container">
            <label>Time Slot&ensp;(required)</label>
            <div className="time-slots-grid">
              {timeSlots.map((timeSlot) => (
                <div
                  key={timeSlot}
                  className={`time-slot ${
                    selectedTime === timeSlot ? "selected" : ""
                  }`}
                  onClick={() => handleTimeClick(timeSlot)}
                  required
                >
                  {timeSlot}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="purpose-container">
          <label className="purpose-label">
            Purpose of Consultation&ensp;(required)
          </label>
          <input
            type="text"
            value={consultationPurpose}
            onChange={(e) => setConsultationPurpose(e.target.value)}
            required
          />
        </div>

        <div className="appt-message-container">
          <label>Message&ensp;(required)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit" className="appt-booking-button">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentPage;
