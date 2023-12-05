"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import Line from "../shared/Line";

const Share = () => {
  const [shareData, setShareData] = useState({});

  const data = useFetchData("homeshare");

  useEffect(() => {
    if (data) {
      setShareData(data);
    }
  }, [data]);
  return (
    <section className="py-[150px] px-5 sm:px-0">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-[74px]">
        <div>
          <h2 className="text-[50px] sm:text-[60px] leading-[70px]">
            {shareData?.Title}
          </h2>
          <Line />
          <h3 className="text-[30px] sm:text-[40px] font-semibold mt-5">
            {shareData?.SubTitle}
          </h3>
          <p className="text-[25px] leading-[34px] mt-6">
            {shareData?.Description}
          </p>
        </div>
        <div className="w-full flex justify-end">
          <img
            className="w-full sm:w-[412px] h-full sm:h-[615px]"
            src="/images/share.png"
            alt="share"
          />
        </div>
      </div>
    </section>
  );
};

export default Share;
