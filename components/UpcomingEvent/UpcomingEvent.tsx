import React from "react";
const events = [
  {
    month: "March",
    title: "F1 Machinery",
    bookings: 274,
  },
  {
    month: "April",
    title: "Defcon-25",
    bookings: 414,
  },
  {
    month: "May",
    title: "Robotics in Finance",
    bookings: 387,
  },
];

const UpcomingEvent = () => {
  return (
    <div className="sm:h-[600px] py-10 sm:py-0">
      <div className="w-[95%] mx-auto flex sm:flex-row flex-col  sm:gap-0 gap-10">
        <div className="w-full sm:w-1/2 flex justify-center items-center text-center">
          <div>
            <p className="text-[40px] sm:w-[60%] text-center ">
              Latest & Upcoming <br /> Events
            </p>
            <p className="sm:w-[60%] text-center text-[25px] mt-[60px]">
              Where the latest knowledge, entertainment and practical skills
              come together for your benefit.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 flex flex-col gap-6">
          {events.map((val, index) => (
            <div
              key={index}
              className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <div className="w-full sm:w-[315px]">
                <div className="text-sm text-gray-600 pl-2 mb-1">{val.month}</div>
                <div className="bg-[#86F897] shadow-md rounded-[10px] h-[144px] w-full relative flex justify-center items-center text-center text-lg font-medium">
                  {val.title}
                  <div className="absolute bottom-3 right-3 text-sm text-[#686868]">
                    Bookings: {val.bookings}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
