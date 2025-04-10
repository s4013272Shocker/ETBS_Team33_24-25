import React from "react";
import "./App.css";

const JoinUs = () => {
  return (
    <section className="join-us">
      <h2>Join Us</h2>
      <div className="join-container">
        <div className="left-box">
          <p>Why not join your fellow event organizers?</p>
          <p>Over 10,000 organizers so far...</p>
          <p>One click, one setup and DONE!</p>
        </div>
        <div className="right-box">
          <h3>Live Event Organizers</h3>
          <p>Live counter of Events organizers.</p>
          <button className="join-btn">Join Now!</button>
        </div>
      </div>
      <div className="arrow"></div>
    </section>
  );
};

export default JoinUs;
