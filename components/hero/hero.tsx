"use client";

import { useState } from "react";

const Hero = () => {
  const [header, setHeader] = useState<any>(null);
  const [openComingSoon, setOpenComingSoon] = useState<any>(null);

  return (
    <div
      className="newsrampBackground px-5 sm:px-[35px] lg:px-[70px] 3xl:px-[20%]"
      id="begin"
    >
      <video autoPlay muted loop playsInline className="videoBackground">
        <source src="/images/video/newsramp.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-white h-[100vh] flex justify-center  flex-col mr-auto w-full lg:w-[70%]">
        <p className="text-[24px] md:text-[36px]">"Uncovering Insights"</p>
        <h1 className="text-[30px] md:text-[47px] font-[700]">
          Empowering audiences and industry leaders with impactful news and
          analysis.
        </h1>
        <h3 className="text-[17px] mt-1 md:mt-0 md:text-[18px]">
          This keeps the same tone and structure while reflecting the focus on
          media and information.
        </h3>
      </div>
    </div>
  );
};

export default Hero;
