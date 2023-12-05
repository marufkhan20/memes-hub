"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";

const Hero = () => {
  const [careerData, setCareerData] = useState({});

  const data = useFetchData("careerpage");

  useEffect(() => {
    if (data) {
      setCareerData(data);
    }
  }, [data]);
  return (
    <>
      <section className="min-h-[400px] sm:min-h-[550px] md:min-h-[800px] lg:min-h-[950px] bg-primary relative px-5 sm:px-0">
        <div className="container flex flex-col justify-center min-h-[400px] sm:min-h-[550px] md:min-h-[800px] lg:min-h-[950px] text-white z-40">
          <h2 className="text-[50px] sm:text-[60px] z-40">
            {careerData?.Title}
          </h2>
          <h3 className="text-[30px] sm:text-[40px] leading-[42px] mt-8 z-40 w-[35%]">
            {careerData?.SubTitle}
          </h3>
        </div>
        <img
          src="/images/career.png"
          alt="career"
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20"
        />
      </section>
      <div className="container mt-[100px]">
        <p className="!text-xl sm:!text-[25px] !leading-[34px] mx-auto w-[90%] text-center">
          {careerData?.Description}
        </p>
      </div>
    </>
  );
};

export default Hero;
