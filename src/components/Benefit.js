import React from "react";
import "./App.css";

const Benefit = () => {
  return (
    <section className="benefit">
      <h2>How Will YOU Benefit?</h2>
      <div className="benefit-container">
        <div className="benefit-box green-box">
          <p>Sharper Insight into your attendees</p>
        </div>
        <div className="benefit-box black-box">
          <p>Better targeting from data analytics</p>
        </div>
      </div>
      <div className="arrow"></div>
    </section>
  );
};

export default Benefit;
