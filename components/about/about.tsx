"use client";

import { useEffect, useState } from "react";
import useInView from "../common/useInView";
import { Switch } from "../ui/switch";
import { useDispatch, useSelector } from "react-redux";
import { Inter, Montserrat } from "next/font/google";
import { useGetFnHook } from "@/hooks/hooks";
import { updateUsaNews } from "@/redux/features/application/userSlice";
import Loading from "../loading/loading";

const montserrat = Montserrat({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  style: "normal",
});

const inter = Inter({ subsets: ["latin"] });

const About = () => {
  const isInView = useInView({ threshold: 1 }, "#about");
  const { usaNews, africaNews } = useSelector((state: any) => state.user);
  const [usaNewsError, setUsaNewsError] = useState<any>(false);

  const date = new Date();
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  const storeDarkModeValue = (value: boolean) => {
    localStorage.setItem("hidden", JSON.stringify(value));
  };

  const getDarkModeValue = () => {
    const storedValue = localStorage.getItem("hidden");
    return storedValue ? JSON.parse(storedValue) : false;
  };

  const [darkMode, setDarkMode] = useState(getDarkModeValue());

  useEffect(() => {
    storeDarkModeValue(darkMode);
  }, [darkMode]);

  const handleToggleBalanceVisibility = () => {
    setDarkMode(!darkMode);
  };

  const dispatch = useDispatch();
  const baseUrl = process.env.NEXT_PUBLIC_NY_BASE_URL;

  const getUsaNewsUrl =
    baseUrl +
    "/search/v2/articlesearch.json?q=us&api-key=fS8iRczRqdTpWgHlGExQsiIeaoUra38f";

  const GetUsaNewsMutate = useGetFnHook();
  const handleGetUsaNews = async () => {
    try {
      const response = await GetUsaNewsMutate.mutateAsync(getUsaNewsUrl);
      if (response?.status == 200) {
        let usaNewsData = response?.data?.response?.docs;

        dispatch(updateUsaNews(usaNewsData));
        setUsaNewsError(false);
      } else {
        setUsaNewsError(true);
      }
    } catch (error) {
      setUsaNewsError(error);
    }
  };

  useEffect(() => {
    handleGetUsaNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleToggleBalanceVisibility();
    }, 10000);

    return () => clearInterval(interval);
  }, [darkMode]);

  return (
    <div>
      {" "}
      <div
        className=" px-5 sm:px-[35px] md:px-[70px] 3xl:px-[20%] py-[60px] "
        id="about"
      >
        <h2 className="text-center text-[24px] md:text-[36px] font-[700] mt-5">
          A catalyst for informed decision-making and a hub for insightful
          analysis.
        </h2>
        <p className="text-center text-[20px] lg:text-[24px] font-[600]">
          (More than just a media platform)
        </p>
        <div
          className={`flex flex-col lg:flex-row gap-2 justify-center py-20 `}
        >
          <div
            className={`w-full lg:w-[28%] h-[max-content]  ${
              darkMode ? "bg-[#eaecee] text-black" : "bg-black text-white"
            } rounded-[2.5em] hidden lg:flex flex-col py-10 px-5 2xl:px-7`}
          >
            <div className="flex justify-between items-center">
              <p className="text-[17px]">Light theme</p>
              <Switch
                className="h-[10px]"
                checked={darkMode}
                onCheckedChange={() => handleToggleBalanceVisibility()}
              />
            </div>
            <p
              className={`py-5 text-justify text-[14.5px] my-10 px-4 xl:px-10`}
            >
              {" "}
              "At NewsQuant, we are more than just a media platform; we are a
              catalyst for informed decision-making and a hub for insightful
              analysis."
            </p>
            <a
              href="/#topstories"
              className="bg-black rounded-[20px] text-[#eaecee] w-[max-content] px-5 h-[30px] pb-1 flex justify-center items-center"
            >
              newsquat
            </a>
          </div>

          <div
            className={`w-full lg:w-[65%] min-h-[550px] lg:h-[550px]  px-5 lg:px-10 2xl:px-20 py-10  ${
              darkMode ? "bg-[#eaecee] text-black" : "bg-black text-white"
            } rounded-[2.5em]`}
          >
            {!GetUsaNewsMutate.isPending && usaNews !== null && (
              <div className="flex flex-col lg:flex-row justify-between">
                <div className="mb-5 ">
                  <p className="text-[24px] lg:text-[34px] font-[700]">
                    {day}, {month}
                  </p>
                  <p className="text-[24px] lg:text-[30px] my-2">
                    {hours}:{minutes} <span>{ampm}</span>
                  </p>

                  <div className="my-5 flex flex-wrap justify-between lg:flex-col">
                    {usaNews?.slice(0, 10)?.map((item: any, index: any) => {
                      return (
                        <div key={index} className="py-1">
                          <a
                            href={item?.url || item.web_url}
                            target="_blank"
                            className={`text-[14px] capitalize max-w-[275px]  ${
                              darkMode ? " text-black" : "text-[#eaecee]"
                            } text-justify`}
                          >
                            {item?.des_facet?.[0] || item?.keywords?.[0]?.value}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="">
                    {usaNews?.slice(0, 3)?.map((item: any, index: any) => {
                      return (
                        <div
                          key={index}
                          className={`relative  ${
                            index > 0 ? "mt-[-90px] lg:mt-[-200px] " : ""
                          } ${
                            index > 0 && index <= 1
                              ? "xl:ml-[-40px] "
                              : index > 1
                              ? "xl:ml-[-100px]"
                              : ""
                          }`}
                        >
                          <a target="_blank" href={item?.url || item.web_url}>
                            {item?.multimedia?.[0]?.url && (
                              <img
                                src={
                                  item.multimedia?.[0].url?.includes("https:")
                                    ? item.multimedia?.[0].url
                                    : "https://static01.nyt.com/" +
                                      item.multimedia?.[0].url
                                }
                                className={`w-full lg:w-[275px] h-[275px] object-cover rounded-[1.5rem]`}
                                alt="img"
                              />
                            )}
                          </a>
                          <a
                            href={item?.url || item.web_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[14px] relative top-[-60px] capitalize max-w-[275px] text-white font-[700] me-5 left-3 right-0"
                          >
                            {item?.des_facet?.[0] || item?.keywords?.[0]?.value}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {GetUsaNewsMutate.isPending && usaNews == null && (
              <div className="py-5">
                <Loading />
              </div>
            )}

            {!GetUsaNewsMutate.isPending && usaNews == null && usaNewsError && (
              <div className="py-10 text-[#eaecee] text-center text-[18px] md:text-[22px]">
                Unable to fetch articles now. Please try again later
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
