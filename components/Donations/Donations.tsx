import React from "react";
import { Button } from "../ui/button";

const Donations = () => {
  return (
    <div>
      <div className="w-[95%] mx-auto mt-7">
        <p className="text-[40px] text-center">Donations </p>
        <p className="text-[20px] text-center mt-5 w-[60%]  mx-auto">
          This contributions are strictly for the bonuses of the worldwide
          developer team who keep the intricate systems running.
        </p>
        <p className="text-[20px] text-center mt-5 w-[60%]  mx-auto">
          As well as the physical hard-working volunteers, who seek to assist us
          at our venues, if you’re looking for a job opportunity, this is
          definitely a place to start, contact us via email at the bottom of the
          page to find out more!
        </p>

        <div className="flex justify-between items-center mt-10 pb-5">
            <div>
                <img src="/donation1.png" alt="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-[90px]">
                <div className="text-[20px] text-center w-[80%]  mx-auto">
                We Highly appreciate your donations!

                </div>
                <div className="w-full flex justify-center">
                    <Button className="text-[20px] text-black font-normal hover:cursor-pointer w-[70%]  bg-[#86F897] py-10  rounded-[5px] hover:bg-[#86F897] border-2 border-[#108F23]"  >
                    DONATE
                    </Button>
                </div>
             
            </div>
            <div>
                <img src="/donation2.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;
