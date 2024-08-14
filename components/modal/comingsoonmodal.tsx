"use client";

import React, { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import Image from "next/image";
import Link from "next/link";
import SuccessImage from "../../public/images/Success.svg";
import { DialogClose } from "@radix-ui/react-dialog";

interface Props {
  isOpen?: any;
  setIsOpen?: any;
}

const ComingSoonModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent className="max-w-[90%] rounded-[10px] sm:max-w-[500px] outline-none px-5 lg:px-10 py-[5%] flex flex-col justify-center items-center overflow-y-scroll max-h-[99vh]">
          <div className="flex flex-col justify-center items-center mx-auto">
            <h2 className="text-2xl text-center font-bold text-[#2a2570] mt-4 mb-4 sm:mt-0">
              Coming Soon: Embark on a Journey with Us!
            </h2>
            <p className="text-lg text-center mt-4 text-gray-700">
              We're preparing something exciting! Our blog will soon be your
              go-to destination for stories, tips, and insights on our journey
              exploring the world. From breathtaking landscapes to hidden gems,
              we’ll share the adventures that ignite our wanderlust and inspire
              your next journey. Stay tuned—your next great adventure begins
              here!
            </p>
            <DialogClose>
              <p className="text-xl bg-[#2a2570] px-10 py-2 rounded-[30px] text-white mt-[50px]">
                Close
              </p>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ComingSoonModal;
