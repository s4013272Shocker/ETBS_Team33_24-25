


function AttendeeView() {
    return (
      <section className="attendee-view">
        <div className="attendee-image">
          <img 
            src="/" 
            alt="Person looking at smartphone" 
          />
        </div>
        
        <div className="attendee-content">
          <h2 className="attendee-title">What Do Your Attendees See?</h2>
          
          <ol className="attendee-list">
            <li className="attendee-list-item">
              Tickeven sends your event via email or notification on their account to all candidates of your chosen target audience, 
              as filled in "Step 2" of setting up your event.
            </li>
            <li className="attendee-list-item">
              Users see the event and make a reservation for the venue you've appointed through the link we sent to them via 
              email/notification.
            </li>
            <li className="attendee-list-item">
              Attendees receive a confirmation email containing a receipt of their confirmed reservation & QR to show at the event.
            </li>
            <li className="attendee-list-item">
              Over time the reminder frequency or set dates to remind the attendees of your event will be automated, 
              hence why it will be at the forefront of their mind as the event date gets closer.
            </li>
            <li className="attendee-list-item">
              Attendees get an automatic reminder the day before (by default). Then have the ability to show their 
              QR code via the digital reservation receipt (in their email).
            </li>
          </ol>
        </div>
      </section>
    );
  }

  export default AttendeeView;