import React from "react";
import "./App.css";

const Host = () => {
  return (
    <section className="we-host">
      <h2>We host here... and there...</h2>
      <p>We are available in a VARIETY of Countries:</p>
      <p>United Kingdom, USA, Canada, UAE and much more!</p>
      <p>Try searching for it, there's a good chance we're there:</p>
      <p>Green = Yes | Red = No</p>
      <input type="text" placeholder="Search for a country..." className="search-box" />
      <button className="search-btn"></button>
      <div className="flags">
        {/*flag images*/}
        <div className="flag green"></div>
        <div className="flag green"></div>
        <div className="flag green"></div>
        <div className="flag green"></div>
        <div className="flag green"></div>
        <div className="flag green"></div>
      </div>
    </section>
  );
};

export default Host;
