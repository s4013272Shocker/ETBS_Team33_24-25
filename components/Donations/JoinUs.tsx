import React from "react";
import { Button } from "../ui/button";

const JoinUs = () => {
  return (
    <div className="my-10">
      <div className="w-[95%] mx-auto py-20 flex justify-center gap-5 text-[20px]">
        <div>
          <p className="text-center">
            By joining Tickeven, you will be able to place <br /> your event in
            front of users as you’ve seen <br /> above.
          </p>
          <p className="mt-5 text-center">
            {" "}
            With the addition of notifying them via email <br /> from your
            dashboard.{" "}
          </p>
        </div>
        <div className="">
          <img src="/arrow.png" alt="" />
        </div>
        <div>
          <Button className="text-[20px] text-black font-normal hover:cursor-pointer px-20  bg-[#86F897] py-10  rounded-[5px] hover:bg-[#86F897] border-2 border-[#108F23]">
            Join Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
