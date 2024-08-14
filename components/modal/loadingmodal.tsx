"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ImSpinner8 } from "react-icons/im";

interface Props {
  isOpen?: any;
  setIsOpen?: any;
}

const LoadingModal = ({ isOpen, setIsOpen }: Props) => {
  return (
    <Dialog open={isOpen}>
      <DialogContent className=" bg-transparent h-[max-content] w-full shadow-none outline-none border-none px-10 py-[5%] flex flex-col justify-center items-center overflow-hidden max-h-[99vh]">
        <ImSpinner8 className={` text-[40px] text-white animate-spin `} />{" "}
      </DialogContent>
    </Dialog>
  );
};

export default LoadingModal;
