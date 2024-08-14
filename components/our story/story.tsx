"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const OurStory = () => {
  const { topNews, africaNews } = useSelector((state: any) => state.user);
  const [firstSliceValue, setFirstSliceValue] = useState<number>(0);
  const [secondSliceValue, setSecondSliceValue] = useState<number>(1);
  const [isIncrementing, setIsIncrementing] = useState(true);
  const [animate, setAnimate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirstSliceValue((prev) => {
        let newValue;
        if (isIncrementing) {
          if (prev < 9) {
            newValue = prev + 1;
          } else {
            setIsIncrementing(false);
            newValue = prev - 1;
          }
        } else {
          if (prev > 0) {
            newValue = prev - 1;
          } else {
            setIsIncrementing(true);
            newValue = prev + 1;
          }
        }
        setSecondSliceValue(newValue + 1);
        setAnimate(newValue);
        return newValue;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [isIncrementing]);

  return (
    <div className="bg-black w-full py-[60px] md:py-[100px]">
      <div
        key={firstSliceValue}
        className={`mx-5 sm:mx-[35px] md:mx-[70px] xl:mx-[14%] 2xl:mx-[20%] 3xl:mx-[20%] rounded-[40px] md:rounded-[70px]  bg-[#c1c1c1] h-[auto] lg:h-[fit-content] 
           `}
        id="ourstory"
      >
        <div className="py-5 px-[20px] md:px-[60px] lg:ps-[60px] lg:pe-0">
          <div>
            <div className="my-5">
              {topNews
                ?.slice(firstSliceValue, secondSliceValue)
                ?.map((item: any, index: any) => {
                  return (
                    <a
                      key={index}
                      href={item?.url || item.web_url}
                      target="_blank"
                      className={`py-1 flex flex-col items-center lg:flex-row justify-between gap-10 lg:gap-0
                        
                        ${
                          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(
                            firstSliceValue
                          )
                            ? "carousel-zoom-in"
                            : "carousel-zoom-in"
                        } transition-transform duration-700 ease-in-out
                        `}
                    >
                      <div className="w-full lg:w-[70%]">
                        <h3
                          className={`text-[20px] md:text-[30px] lg::text-[35px] 3xl:text-[45px] font-[700] capitalize `}
                        >
                          {item?.title}
                        </h3>
                        <div className="w-full sm:w-[400px] max-h-[30vh] h-auto overflow-hidden rounded-b-full my-5 bg-black flex mx-auto lg:mx-0">
                          <img
                            src={
                              item.multimedia?.[2].url?.includes("https:")
                                ? item.multimedia?.[2].url
                                : "https://static01.nyt.com/" +
                                  item.multimedia?.[2].url
                            }
                            className={`w-[270px] object-cover rounded-b-full pt-5 me-10 scale-110 flex mx-auto rotate-[-20deg] rounded-[10px]`}
                            alt="img"
                          />
                        </div>
                        <p className="3xl:text-[24px]">"{item?.abstract}"</p>
                      </div>
                      <div className="relative lg:top-[-100px]">
                        <img
                          src={
                            item.multimedia?.[0].url?.includes("https:")
                              ? item.multimedia?.[0].url
                              : "https://static01.nyt.com/" +
                                item.multimedia?.[0].url
                          }
                          className={`w-full lg:w-[205px] h-[400px] lg:h-[70vh] object-cover rounded-[10px]`}
                          alt="img"
                        />
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
