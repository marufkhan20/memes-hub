"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";

const Discover = () => {
  const [discoverData, setDiscoverData] = useState({});

  const data = useFetchData("homediscover");

  useEffect(() => {
    if (data) {
      setDiscoverData(data);
    }
  }, [data]);
  return (
    <section className="bg-primary">
      <div className="pt-[100px] text-center text-white">
        <div className="container">
          <h2 className="text-[50px] sm:text-[60px] leading-[70px] text-white">
            {discoverData?.Title}
          </h2>
          <h3 className="text-[30px] sm:text-[40px] font-semibold mt-5">
            {discoverData?.SubTitle}
          </h3>
          <p className="text-[25px] leading-[34px] mt-6 w-[70%] mx-auto">
            {discoverData?.Description}
          </p>
        </div>
        <img src="/images/discover.png" alt="discover" className="w-full" />
      </div>
    </section>
  );
};

export default Discover;
