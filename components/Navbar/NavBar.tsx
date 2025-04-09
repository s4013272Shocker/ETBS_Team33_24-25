"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const NavBarMenu = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/",
  },
  {
    name: "Upcoming Events",
    link: "/upcoming-event",
  },
  {
    name: "Event Organization",
    link: "/",
  },
  {
    name: "Donations",
    link: "/donations",
  },
];

const NavBar = () => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-b from-[#86f797] to-white">
      <div className="w-[95%] mx-auto flex justify-between items-center py-4">
        <div
          className="text-[30px] cursor-pointer"
          onClick={() => router.push("/")}
        >
          Tickeven
        </div>
        <div className="flex gap-5">
          {NavBarMenu.map((val, index) => {
            return (
              <Link
                key={index}
                href={val.link}
                className="cursor-pointer hover:underline text-[12px]"
              >
                {val.name}
              </Link>
            );
          })}
        </div>
        <div className="flex gap-5">
          <Button className="text-white text-[12px] py-2 px-6 rounded-[10px] bg-black hover:bg-black hover:cursor-pointer">
            Login
          </Button>
          <Button className="text-black text-[12px] py-2 px-6 rounded-[10px] border-2 border-black bg-transparent hover:bg-transparent hover:cursor-pointer">
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
