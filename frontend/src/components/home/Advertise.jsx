"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import Line from "../shared/Line";

const Advertise = () => {
  const [advertiseData, setAdvertiseData] = useState({});

  const data = useFetchData("homeadvertise");

  useEffect(() => {
    if (data) {
      setAdvertiseData(data);
    }
  }, [data]);
  return (
    <section className="py-[150px] px-5 lg:px-0">
      <div className="flex items-center flex-col-reverse lg:flex-row justify-between gap-[74px] w-full lg:w-[90%]">
        <div className="w-full lg:w-[50%]">
          <img src="/images/advertise.png" alt="advertise" />
        </div>
        <div className="w-full lg:w-[40%]">
          <h2 className="text-[40px] sm:text-[60px] leading-[70px]">
            {/* <span className="text-primary">Advertise</span> with Us */}
            {advertiseData?.Title}
          </h2>
          <Line />
          <h3 className="text-[30px] sm:text-[40px] font-semibold mt-5">
            {/* Put Your Brand in the{" "}
            <span className="text-primary">Spotlight</span> */}
            {advertiseData?.SubTitle}
          </h3>
          <p className="text-[25px] leading-[34px] mt-6">
            {advertiseData?.Description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
