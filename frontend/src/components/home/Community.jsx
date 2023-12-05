"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import Line from "../shared/Line";

const Community = () => {
  const [communityData, setCommunityData] = useState({});

  const data = useFetchData("homecommunity");

  useEffect(() => {
    if (data) {
      setCommunityData(data);
    }
  }, [data]);
  return (
    <section className="pt-[150px] relative overflow-hidden">
      <div className="bg-secondary px-5 sm:px-0">
        <div className="container flex flex-col-reverse md:flex-row items-center justify-between md:gap-[74px] pt-20">
          <div>
            <div className="w-[372px]">
              <img src="/images/community.png" alt="community" />
            </div>
          </div>
          <div className="pb-20 z-40">
            <h2 className="text-[50px] sm:text-[60px] leading-[70px]">
              {communityData?.Title}
            </h2>
            <Line />
            <h3 className="text-[30px] sm:text-[40px] font-semibold mt-5">
              {/* Join the <span className="text-primary">Laughter Club</span> */}
              {communityData?.SubTitle}
            </h3>
            <p className="text-[25px] leading-[34px] mt-6">
              {communityData?.Description}
            </p>
          </div>
        </div>
      </div>

      <div className="w-[244px] h-[244px] rounded-full bg-primary absolute top-[50%] translate-y-[-40%] left-[-122px] z-20" />

      <div className="w-[356px] h-[356px] rounded-full bg-transparent border-[30px] border-primary absolute top-0 right-[-150px] z-20 flex items-center justify-center"></div>
    </section>
  );
};

export default Community;
