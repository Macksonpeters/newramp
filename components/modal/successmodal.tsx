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

const SuccessModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent className="max-w-[90%] rounded-[10px] sm:max-w-[500px] outline-none px-5 lg:px-10 py-[5%] flex flex-col justify-center items-center overflow-y-scroll max-h-[99vh]">
          <Image
            src={SuccessImage}
            alt="modal-img"
            className="object-contain mt-4 sm:mt-0"
          />
          <div className="flex flex-col justify-center items-center mx-auto">
            <h2 className="text-3xl font-bold text-[#2a2570] mb-4">
              Adventure Awaits!
            </h2>
            <p className="text-lg text-center text-gray-700">
              Thanks for joining our journey! Your interest is registered. Get
              ready to explore the extraordinary. <br />
              You will be hearing from us soon. <br />
              Exciting adventures are just around the corner!
            </p>
            <DialogClose>
              <p className="text-xl bg-[#2a2570] px-10 py-2 rounded-[30px] text-white mt-[50px] mb-2 sm:mb-0">
                Close
              </p>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SuccessModal;
