import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
    if (currentTime.getHours() !== 12 && !(currentTime >= lunchStart && currentTime < lunchEnd)) {
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

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Reset selected time when the date changes
    setSelectedTime(null);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", {
      firstName,
      lastName,
      email,
      countryCode,
      phoneNumber,
      selectedDate,
      selectedTime,
      consultationPurpose,
      message,
    });
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="appointment-page-container">
      <form onSubmit={handleFormSubmit}>
        <div className="name-container">
          <div>
            <label>First Name&ensp;(required)</label>
            <input
            className="firstname-input"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name&ensp;(required)</label>
            <input
            className="lastname-input"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="email-container">
          <label>Email&ensp;(required)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="phone-container">
          <div>
            <label>Country Code&ensp;(required)</label>
            <input
              className="country-input"
              type="text"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            />
          </div>
          <div>
            <label className="number-label">Phone Number&ensp;(required)</label>
            <input
              className="number-input"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
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
                >
                  {timeSlot}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="purpose-container">
          <label className="purpose-label">Purpose of Consultation&ensp;(required)</label>
          <input
            type="text"
            value={consultationPurpose}
            onChange={(e) => setConsultationPurpose(e.target.value)}
          />
        </div>

        <div className="message-container">
          <label>Message&ensp;(required)</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Book Appointment</button>
        </div>
      </form>
    </div>
  );
}

export default AppointmentPage;