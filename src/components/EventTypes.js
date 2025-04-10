import React from "react";
import "./App.css";

const EventTypes = () => {
  return (
    <section className="event-types-section">
      <div className="event-list">
        <p>
          We have wide selection of events, for your choosing, here is a list of our top 10 common events:
        </p>
        <ol>
          <li>Concerts</li>
          <li>Tech Conferences</li>
          <li>Agriculture</li>
          <li>Climate</li>
          <li>Fitness and Health</li>
          <li>Books</li>
          <li>Mindfulness</li>
          <li>Financial Conferences</li>
          <li>Military Conferences</li>
          <li>Car conferences</li>
        </ol>
      </div>

      <div className="event-carousel">
        <h3>Happening Today</h3>
        <p>Click on the event poster you’d like to book.</p>
        <div className="carousel-box">
          <button className="carousel-btn left">&#10094;</button>
          <img src="/" alt="Event Poster" />
          <button className="carousel-btn right">&#10095;</button>
        </div>
        <p className="event-date">Date: 18/07/2025</p>
      </div>
    </section>
  );
};

export default EventTypes;
