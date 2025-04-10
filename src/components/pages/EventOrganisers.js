import React from 'react';
import '../components/Event.css';
import Footer from "../components/Footer";
import CreatorsSection from '../components/CreatorsSection';
import EventSetupGuide from '../components/EventSetupGuide';
import AttendeeView from '../components/AttendeeView';
import Refund from '../components/Refund';


// Main page
function EventOrganisersPage() {
  return (
    <div>
        <CreatorsSection />
        <EventSetupGuide />
        <AttendeeView />
        <Refund />
      
      <Footer />
    </div>
  );
}





export default EventOrganisersPage;