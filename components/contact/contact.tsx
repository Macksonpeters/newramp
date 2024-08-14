"use client";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div
        className=" px-5 sm:px-[35px] md:px-[70px] xl:mx-[5%] 2xl:mx-[10%] 3xl:px-[20%] py-[60px] bg-white "
        id="contact"
      >
        <div className="">
          <h1 className="text-[30px] md:text-[55px] lg:text-[70px]  font-[700]  text-center lg:text-start">
            We’ll help you
          </h1>
          <h1 className="text-[30px] md:text-[55px] lg:text-[70px]  font-[700]  text-center lg:text-start md:mt-[-20px] lg:mt-[-30px]">
            get started{" "}
          </h1>
          <div className="flex flex-col items-center lg:flex-row gap-[40%]">
            {" "}
            <p className="lg:w-[50%] py-5 lg:py-0 text-center lg:text-justify text-[17px]">
              Explore NewsQuant for insightful articles, in-depth analysis, and
              expert opinions designed to empower organizations. Whether you're
              seeking the latest trends, industry insights, or thought
              leadership, NewsQuant delivers tailored content that drives
              informed decisions and enhances your strategic vision.
            </p>
            <div className="flex justify-start">
              <a href="mailto:enquiries@newsquant.com">
                {" "}
                <FaArrowRight className="text-[50px] text-black slow animate-pulse cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-black py-2">
          Copyright <span className="text-black font-[600]">©</span>{" "}
          {new Date().getFullYear()}.{" "}
          <span className="">newsquant, Inc. All rights reserved</span>
        </p>
      </div>
    </div>
  );
};

export default Contact;
