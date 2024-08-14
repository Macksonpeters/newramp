"use client";
import { useGetFnHook } from "@/hooks/hooks";
import {
  updateAfricaNews,
  updateTopNews,
} from "@/redux/features/application/userSlice";
import { Montserrat } from "next/font/google";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeatureSlider from "./components/featureSlider";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Progress } from "../ui/progress";
import useInView from "../common/useInView";
import Loading from "../loading/loading";

const Feature = () => {
  const [progress, setProgress] = useState<number>(0);
  const [returnProgress, setReturnProgress] = useState<number>(100);
  const [topNewsError, setTopNewsError] = useState<any>(false);
  const [africaNewsError, setAfricaNewsError] = useState<any>(false);
  const isInView = useInView({ threshold: 0.5 }, "#topstories");

  const { topNews, africaNews } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const baseUrl = process.env.NEXT_PUBLIC_NY_BASE_URL;
  const getTopNewsUrl =
    baseUrl +
    "/topstories/v2/home.json?api-key=fS8iRczRqdTpWgHlGExQsiIeaoUra38f";
  const getAfricaNewsUrl =
    baseUrl +
    "/search/v2/articlesearch.json?q=africa&api-key=fS8iRczRqdTpWgHlGExQsiIeaoUra38f";

  const GetTopNewsMutate = useGetFnHook();
  const GetAfricaNewsMutate = useGetFnHook();

  const handleGetTopNews = async () => {
    try {
      const response = await GetTopNewsMutate.mutateAsync(getTopNewsUrl);
      if (response?.status == 200) {
        let topNewsData = response?.data?.results;
        dispatch(updateTopNews(topNewsData));
        setTopNewsError(false);
      } else {
        // ShowToast(response?.data?.responseDescription, "error");
      }
    } catch (error) {
      setTopNewsError(error);
    }
  };
  const handleGetAfricaNews = async () => {
    try {
      const response = await GetAfricaNewsMutate.mutateAsync(getAfricaNewsUrl);
      if (response?.status == 200) {
        let africaNewsData = response?.data?.response?.docs;
        dispatch(updateAfricaNews(africaNewsData));
        setAfricaNewsError(false);
      } else {
        // ShowToast(response?.data?.responseDescription, "error");
      }
    } catch (error) {
      setAfricaNewsError(error);
    }
  };

  useEffect(() => {
    handleGetTopNews();
  }, []);
  useEffect(() => {
    handleGetAfricaNews();
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 3 : prev));
        setReturnProgress((prev) => (prev > 0 ? prev - 1 : prev));
      }, 100);

      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        setProgress((prev) => (prev > 0 ? prev - 3 : prev));
        setReturnProgress((prev) => (prev < 100 ? prev + 1 : prev));
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <div
      className=" px-5 sm:px-[35px] md:px-[70px] 3xl:px-[15%] 4xl:px-[20%] pb-[60px]"
      id="topstories"
    >
      <p className={`text-[20.5px] lg:text-[24px] 3xl:text-[39px]`}>
        Empowering decision-makers with sharp, real-time insights — delivering
        the news that matters, exactly when it counts.
      </p>

      <Progress value={progress} className="w-[100%] h-[5px] my-10" />

      {GetTopNewsMutate.isPending && topNews == null && (
        <div className="py-5">
          <Loading />
        </div>
      )}
      {GetAfricaNewsMutate.isPending && africaNews == null && (
        <div className="py-5">
          <Loading />
        </div>
      )}

      {!GetTopNewsMutate.isPending && topNews !== null && (
        <div className="relative mx-[-18px] top-5 sm:me-[-35px] md:me-[-70px] 3xl:me-[-20%] py-5 md:py-10 h-[300px] md:min-h-[40vh] 3xl:min-h-[350px] flex justify-center items-center flex-col">
          <FeatureSlider direction={false} data={topNews} />
        </div>
      )}

      {!GetAfricaNewsMutate.isPending && africaNews !== null && (
        <div className="relative mx-[-18px] top-1 lg:top-0 sm:ms-[-35px] md:ms-[-70px] 3xl:ms-[-20%] py-5 md:py-10 h-[300px] md:min-h-[40vh] 3xl:min-h-[350px] flex justify-center items-center flex-col">
          <FeatureSlider direction={true} data={africaNews} />
        </div>
      )}

      {!GetAfricaNewsMutate.isPending &&
        africaNews == null &&
        africaNewsError &&
        !GetTopNewsMutate.isPending &&
        topNews == null &&
        topNewsError && (
          <div className="py-10 text-[#eaecee] text-center text-[18px] md:text-[22px]">
            Unable to fetch articles now. Please try again later
          </div>
        )}

      <Progress
        value={progress}
        className="w-[100%] h-[5px] my-10 rotate-180"
      />
    </div>
  );
};

export default Feature;
