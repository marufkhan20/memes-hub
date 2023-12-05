"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import Line from "../shared/Line";

const About = () => {
  const [aboutData, setAboutData] = useState({});

  const data = useFetchData("aboutpage");

  useEffect(() => {
    if (data) {
      setAboutData(data);
    }
  }, [data]);
  return (
    <section className="py-[150px] sm:px-0 px-5">
      <div className="container flex-col-reverse md:flex-row flex items-center text-center">
        <div className="w-full sm:w-[70%] md:w-[55%] mx-auto">
          <h2 className="text-[50px] sm:text-[60px] leading-[70px]">
            {aboutData?.Title}
          </h2>
          <Line className="mx-auto" />
          <h3 className="text-[30px] sm:text-[40px] font-semibold mt-[40px]">
            {aboutData?.SubTitle}
          </h3>
          <p className="!text-[20px] sm:!text-[25px] leading-[34px] mt-7">
            {aboutData?.Description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
