"use client";

import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";

interface Props {
  data?: any;
  direction?: boolean;
}

const FeatureSlider = ({ data, direction }: Props) => {
  const { topNews } = useSelector((state: any) => state.user);

  return (
    <div className="absolute w-[100%]">
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: direction,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        speed={800}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          240: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          850: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1300: {
            slidesPerView: 6,
          },
          1600: {
            slidesPerView: 7,
          },
          1800: {
            slidesPerView: 8,
          },
        }}
      >
        {data?.slice(0, 20)?.map((item: any, index: any) => {
          return (
            <SwiperSlide className="" key={index}>
              {({ isActive }) => (
                <div
                  className={`${
                    isActive ? "carousel-zoom-out" : ""
                  }  transition-transform duration-700 ease-in-out `}
                >
                  {item?.multimedia?.[0]?.url && (
                    <img
                      src={
                        item.multimedia?.[0].url?.includes("https:")
                          ? item.multimedia?.[0].url
                          : "https://static01.nyt.com/" +
                            item.multimedia?.[0].url
                      }
                      className={`w-[275px]  lg:w-[275px] h-[275px] object-cover rounded-[1.5rem] `}
                      alt="img"
                    />
                  )}
                  <a
                    href={item?.url || item.web_url}
                    target="_blank"
                    className="text-[14px] relative top-[-60px] capitalize max-w-[275px] text-white font-[700] me-5 left-3 right-0"
                  >
                    {item?.des_facet?.[0] || item?.keywords?.[0]?.value}
                  </a>
                </div>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FeatureSlider;
