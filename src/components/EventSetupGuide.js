import React from "react";
import "./App.css";


function EventSetupGuide() {
    return (
      <section className="setup-guide">
        <h2 className="guide-title">How To Setup An Event</h2>
        
        <div className="setup-step">
          <h3 className="step-title">Step 1: Create An Event</h3>
          <p className="step-description">
            On the top right section of your Dashboard, you will see a 'Create Event' button, then click on it.
          </p>
        </div>
        
        <div className="setup-step">
          <h3 className="step-title">Step 2: Setup Event Details</h3>
          <p className="step-description">
            Here you will fill in a form, relating to all the details for your new event, these will include: 
            Event name, hosts, venue, activities/presentations, opening and closing times.
          </p>
        </div>
        
        <div className="setup-step">
          <h3 className="step-title">Step 3: Setup Reminders For Attendees</h3>
          <p className="step-description">
            From how many to how often reminders should be sent, inclusive of when each will be sent... all in your hands.
          </p>
        </div>
        
        <div className="setup-step">
          <h3 className="step-title">Step 4: A Custom Made Poll</h3>
          <p className="step-description">
            In case you desire insights for future events and would like to keep readily accessible data from users, 
            feel free to use this optional step.
          </p>
        </div>
        
        <div className="setup-step">
          <h3 className="step-title">Step 5: Publish Your Event</h3>
          <p className="step-description">
            Simply click "Publish Event" to release your event to your target users, 
            we'll handle getting the attention of your target attendees.
          </p>
        </div>
      </section>
    );
  }

  export default EventSetupGuide;