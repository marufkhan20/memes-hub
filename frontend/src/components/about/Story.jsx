"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";

const Story = () => {
  const [shareData, setShareData] = useState({});

  const data = useFetchData("aboutshare");

  useEffect(() => {
    if (data) {
      setShareData(data);
    }
  }, [data]);
  return (
    <section className="pb-[150px] px-5 sm:px-0 flex justify-end">
      <div className="w-[90%] flex flex-col-reverse md:flex-row items-center justify-between gap-[74px]">
        <div className="w-full md:w-[60%] lg:w-[50%]">
          <h2 className="text-[50px] sm:text-[60px] leading-[70px]">
            {shareData?.Title}
          </h2>
          <p className="!text-xl sm:!text-[25px] leading-[34px] mt-6 w-[80%] lg:w-[70%]">
            {shareData?.Description}
          </p>
        </div>
        <div className="w-full md:w-[40%] lg:w-[50%] flex justify-center items-center md:justify-end">
          <img
            className="w-full h-full mx-auto"
            src="/images/story.png"
            alt="story"
          />
        </div>
      </div>
    </section>
  );
};

export default Story;
