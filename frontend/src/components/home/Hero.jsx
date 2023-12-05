"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import Line from "../shared/Line";
import Button from "../ui/Button";

const Hero = () => {
  const [heroData, setHeroData] = useState({});

  const data = useFetchData("homehero");

  useEffect(() => {
    if (data) {
      setHeroData(data);
    }
  }, [data]);
  return (
    <section className="mt-16 min-h-[750px] hero relative overflow-hidden px-5 sm:px-0">
      <div className="container flex justify-center sm:justify-between gap-5 min-h-[750px] items-center relative">
        <div className="w-full sm:w-[60%] lg:w-[40%] text-center sm:text-left">
          <h2 className="text-[45px] leading-[50px]">
            {/* Welcome to <span className="text-primary">Memetow</span> */}
            {heroData?.Title}
          </h2>
          <h3 className="text-[35px] font-semibold">– {heroData?.SubTitle}</h3>
          <Line />
          <p className="text-[25px] my-10 mx-auto sm:mx-0 w-[80%] leading-[27px]">
            {heroData?.Description}
          </p>
          <Button>Explore More</Button>
        </div>
        <div className="absolute bottom-0 right-0 -z-20 hidden sm:block">
          <img className="" src="/images/hero.png" alt="hero" />
        </div>
      </div>
      <div className="w-[372px] h-[372px] rounded-full bg-secondary absolute bottom-[-100px] right-[-150px] -z-20" />
      <div className="w-[372px] h-[372px] rounded-full bg-primary absolute top-[-100px] left-[-150px] -z-20 flex items-center justify-center">
        <div className="bg-[#FEFEFE] w-[320px] h-[320px] rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
