


function Refund() {
    return (
      <section className="refund-control">
        <h2 className="refund-title">Refund Control</h2>
        
        <div className="refund-container">
          <div className="refund-text">
            <p className="refund-description">
              As you get closer to the event date, you can pre-program how much attendees can receive if they request a refund for their ticket.
            </p>
            <p className="refund-description">
              For example, the further away the event the higher the percentage of refund attendees can receive; 
              the closer the event the lower the refund.
            </p>
          </div>
          
          <div className="refund-image">
            <img 
              src="/api/placeholder/400/200" 
              alt="Hands holding money" 
            />
          </div>
        </div>
      </section>
    );
  }

export default Refund;