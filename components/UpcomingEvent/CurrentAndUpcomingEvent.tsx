"use client";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import EventCard from "./EventCard";
import { eventDetail } from "./EventData";

const CurrentAndUpcomingEvent = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="w-[95%] mx-auto py-10 mb-10">
      {/* Title */}
      <div className="text-center text-[30px] font-semibold w-fit px-6 py-2 rounded mx-auto">
        Current & Upcoming UK Events
      </div>

      {/* Search */}
      <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
        <div className="bg-[#D9D9D9] rounded-md pl-2 pr-5 flex items-center gap-2">
          <input
            type="text"
            placeholder="Search any type of event here..."
            className="focus:outline-none px-4 py-2 rounded-md w-80"
            onChange={(event) => setSearch(event.target.value)}
          />
          <IoSearch className="cursor-pointer" />
        </div>
      </div>

      {/* Events Listing */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventDetail.map((val, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-[#181717] to-white p-4 rounded-md"
          >
            <h2 className="text-xl font-bold mb-4 text-white">{val.month}</h2>
            {val.events.map((event, idx) => (
              <EventCard key={idx} title={event.title} date={event.date} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentAndUpcomingEvent;
