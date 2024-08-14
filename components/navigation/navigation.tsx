"use client";

import React, { useState } from "react";
import useInView from "../common/useInView";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  style: "normal",
});

const Navigation = () => {
  const [header, setHeader] = useState<any>(null);
  const isInView = useInView({ threshold: 0 }, "#begin");

  const headers = [
    {
      name: "Begin",
      path: "/#begin",
    },
    {
      name: "Top stories",
      path: "/#topstories",
    },
    {
      name: "Our Story",
      path: "/#ourstory",
    },
    {
      name: "Contact",
      path: "/#contact",
    },
  ];

  return (
    <div
      className={`fixed left-0 right-0 z-50 flex gap-4 sm:gap-[50px] xl:gap-[120px] mx-auto justify-center items-center  ${
        isInView
          ? "bg-transparent text-white w-[100%] scale-100 mt-[10px]"
          : " bg-black text-white w-[fit-content] px-10 scale-110 sm:scale-[110%] mt-5 rounded-[20px] py-[5px]"
      } transition-transform duration-700 ease-in-out`}
    >
      <div className="font-[600] text-[20px]">
        <a href="/">newsquat.</a>
      </div>
      <header>
        <ul className="hidden md:flex gap-4 sm:gap-[50px] xl:gap-[120px]">
          {headers?.map((item: any, index: any) => {
            return (
              <li
                key={index}
                className={`capitalize  hover:text-gray-400 ${
                  header == index
                    ? "text-gray-300 scale-110 sm:scale-125"
                    : "text-gray-100 scale-100"
                } transition-transform duration-300`}
              >
                <a href={item.path}>{item?.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="md:hidden mt-[10px] text-[25px]">
          <Sheet>
            <SheetTrigger>
              {" "}
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              className={`bg-black text-gray-200 ${montserrat.className}`}
            >
              <SheetHeader>
                <SheetTitle
                  className={`text-gray-200 font-[500] text-start tracking-widest `}
                >
                  Menu
                </SheetTitle>
                <SheetDescription className="text-gray-200 h-[50svh] tracking-widest overflow-y-hidden flex flex-col  justify-center">
                  <ul className=" flex flex-col gap-6 md:hidden">
                    {headers?.map((item: any, index: any) => {
                      return (
                        <li
                          key={index}
                          // onClick={() => handleClick(index)}
                          className={` text-[20px] text-start hover:text-gray-400 ${
                            header == index
                              ? "text-gray-300 scale-110 sm:scale-125"
                              : "text-gray-200 scale-100"
                          } transition-transform duration-300`}
                        >
                          <SheetClose className="capitalize outline-none">
                            <a href={item.path}>{item?.name}</a>
                          </SheetClose>
                        </li>
                      );
                    })}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
