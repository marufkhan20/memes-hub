"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import Line from "../shared/Line";

const About = () => {
  const [aboutData, setAboutData] = useState({});

  const data = useFetchData("homeabout");

  useEffect(() => {
    if (data) {
      setAboutData(data);
    }
  }, [data]);
  return (
    <section className="py-[150px] sm:px-0 px-5">
      <div className="container flex-col-reverse md:flex-row flex items-center justify-between gap-[74px]">
        <div className="mx-5 sm:mx-0">
          <div className="relative w-full sm:w-[372px] h-full sm:h-[424px]">
            <img src="/images/about.png" alt="about" />
            <img
              src="/images/icons/play.svg"
              alt="play icon"
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer"
            />
          </div>
        </div>
        <div>
          <h2 className="text-[50px] sm:text-[60px] leading-[70px]">
            {aboutData?.Title}
          </h2>
          <Line />
          <h3 className="text-[30px] sm:text-[40px] font-semibold mt-5">
            {/* Our <span className="text-primary">Meme-azing</span> Journey */}
            {aboutData?.SubTitle}
          </h3>
          <p className="text-[25px] leading-[34px] mt-6">
            {aboutData?.Description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
