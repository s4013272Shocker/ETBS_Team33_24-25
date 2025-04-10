import React from "react";
import "./App.css";

const HomePageone = () => {
  return (
    <div className="homepage-container">
      <nav className="navbar">
        <h1 className="logo">Tickeven</h1>
        <ul className="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="events.html">Upcoming Events</a></li>
          <li><a href="organizers.html">Event Organizers</a></li>
          <li><a href="donations.html">Donations</a></li>
        </ul>
        <div className="auth-buttons">
          <a href="login.html"><button className="login">Login</button></a>
          <a href="signup.html"><button className="signup">Sign Up</button></a>
        </div>
      </nav>

      <div className="hero-section">
        <div className="text-content">
          <h2>Setup, Choose & Launch</h2>
          <p>Survey your audience, target again for future events</p>
          <ul>
            <li>Faster event bookings</li>
            <li>Reduced time for ticket verification</li>
            <li>Secure payments with refund policy control</li>
          </ul>
          <button className="start-button">Let's Begin</button>
        </div>
        <div className="image-container">
          <img src="/page1.jpg" alt="QR Scan" className="highlighted-image" />
        </div>
      </div>
    </div> 
  );
};

export default HomePageone;