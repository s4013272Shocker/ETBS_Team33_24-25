// app/components/CurrentAndUpcomingEvent.tsx
"use client";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import EventCard from "./EventCard";
import { eventDetail } from "./EventData";

const CurrentAndUpcomingEvent = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="w-[95%] mx-auto py-10 mb-10 ">
      {/* Title */}
      <div className="text-center text-[30px] font-semibold  w-fit px-6 py-2 rounded mx-auto">
        Current & Upcoming UK Events
      </div>

      {/* Search + Select */}
      <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
        {/* Search input */}
        <div className="bg-[#D9D9D9] rounded-md pl-2 pr-5 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search any type of event here..."
            className="focus:outline-none px-4 py-2 rounded-md w-80"
            onChange={(event) => setSearch(event.target.value)}
          />
          <IoSearch className="cursor-pointer" />
        </div>

        {/* Select dropdown */}
      </div>

      {/* Events Listing (simplified static content matching your image) */}
      <div className="mt-10 flex justify-between flex-wrap ">
        {/* March */}
        {eventDetail.map((val, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-b from-[#181717] to-white p-4 rounded-md w-[30%] min-w-[250px]"
            >
              <h2 className="text-xl font-bold mb-4 text-white">{val.month}</h2>
              {val.events.map((event, idx) => (
                <EventCard key={idx} title={event.title} date={event.date} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Reusable Event Card

export default CurrentAndUpcomingEvent;
