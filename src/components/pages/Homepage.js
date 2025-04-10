import React from "react";
import HomePageone from "../components/HomePageone";
import HomePagetwo from "../components/HomePagetwo";
import Footer from "../components/Footer";
import JoinUs from "../components/Joinus";
import Host from "../components/Host";
import Benefit from "../components/Benefit";
import RefundSecurity from "../components/RefundSecurity";
import AttendeeBenefits from "../components/AttendeeBenefits";
import EventTypes from "../components/EventTypes";


function Homepage() {
  return (
    <div>
    <HomePageone />
    <HomePagetwo />
    <JoinUs />
    <Host />
    <Benefit />
    <RefundSecurity />
    <AttendeeBenefits />
    <EventTypes />
    <Footer />


  </div>
    
  );
}

export default Homepage;
