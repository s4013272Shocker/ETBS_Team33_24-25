import React from "react";
import "./App.css";

const AttendeeBenefits = () => {
  return (
    <section className="attendee-benefit-section">
      <h2>How Your Attendees Benefit!</h2>
      <div className="attendee-cards">
        <div className="card"><strong> Nearby Event Alerts</strong></div>
        <div className="card"><strong>Nearby Faster Bookings</strong></div>
        <div className="card"><strong> Suggested Events Based On Individual Interests</strong></div>
      </div>
    </section>
  );
};

export default AttendeeBenefits;
