"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";
import { Menu, X } from "lucide-react";

const NavBarMenu = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/" },
  { name: "Upcoming Events", link: "/upcoming-event" },
  { name: "Event Organization", link: "/" },
  { name: "Donations", link: "/donations" },
];

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-[#86f797] to-white">
      <div className="w-[95%] mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div
          className="text-[24px] font-semibold cursor-pointer"
          onClick={() => router.push("/")}
        >
          Tickeven
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-5">
          {NavBarMenu.map((val, index) => (
            <Link
              key={index}
              href={val.link}
              className="cursor-pointer hover:underline text-[12px]"
            >
              {val.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <Button className="text-white text-[12px] py-2 px-6 rounded-[10px] bg-black cursor-pointer"
            onClick={()=>router.push("/login")}
          >
            Login
          </Button>
          <Button className="text-black text-[12px] py-2 px-6 rounded-[10px] border-2 border-black bg-transparent hover:bg-transparent cursor-pointer"
            onClick={()=>router.push("/signup")}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Drawer */}
        <div className="md:hidden">
          <Drawer direction="right">
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </DrawerTrigger>

            <DrawerContent className="h-full w-[250px] fixed right-0 top-0 bg-white p-6 shadow-lg z-50">
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-semibold">Menu</span>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="w-5 h-5" />
                  </Button>
                </DrawerClose>
              </div>
              <div className="flex flex-col gap-4">
                {NavBarMenu.map((val, index) => (
                  <Link
                    key={index}
                    href={val.link}
                    className="text-sm font-medium hover:underline"
                  >
                    {val.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-6">

                  <Button className="text-white text-[12px] bg-black  cursor-pointer"
                  onClick={()=>router.push("/login")}
                  >
                    Login
                  </Button>
                  <Button className="text-black text-[12px] border border-black bg-transparent hover:bg-transparent cursor-pointer"
                  onClick={()=>router.push("/signup")}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
