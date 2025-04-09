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
    <div className="sm:h-[600px]">
      <div className="w-[95%] mx-auto flex sm:flex-row flex-col  sm:gap-0 gap-10">
        <div className="w-[100%] sm:w-[50%]  flex justify-center items-center ">
          <div>
            <p className="text-[40px] w-[60%] text-center ">
              Latest & Upcoming <br /> Events
            </p>
            <p className="w-[60%] text-center text-[25px] mt-[60px]">
              Where the latest knowledge, entertainment and practical skills
              come together for your benefit.
            </p>
          </div>
        </div>
        <div className="  sm:w-[50%]  h-[600px] pt-[60px] ">
          {events.map((val, index) => {
            return (
              <div
                className={`${index % 2 === 0 ? "" : "justify-end"} flex `}
                key={index}
              >
                <div>
                  <div className="text-[20px] pl-4">{val.month}</div>
                  <div className="bg-[#86F897] shadow-md rounded-[10px] h-[144px] w-[100%] sm:w-[315px] relative  flex justify-center items-center ">
                    {val.title}
                    <div className="absolute bottom-[10px] right-[10px] text-[15px] text-[#686868] flex justify-center items-center ">
                      Bookings: {val.bookings}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
