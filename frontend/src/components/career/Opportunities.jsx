"use client";

import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";

const Opportunities = () => {
  const [opportunityData, setOpportunityData] = useState({});

  const data = useFetchData("careeropportunity?populate=*");

  useEffect(() => {
    if (data) {
      setOpportunityData(data);
    }
  }, [data]);
  return (
    <section className="py-[150px] px-5 sm:px-0">
      <div className="container">
        <h2 className="text-[40px] sm:text-[50px] md:text-[60px] text-center">
          {opportunityData?.Title}
        </h2>
        <div className="flex flex-col gap-9 items-center mt-[100px]">
          {opportunityData?.Opportunities?.map((item) => (
            <div
              className="inline-block w-full sm:w-auto text-center sm:px-[88px] py-[35px] bg-secondary rounded-lg"
              key={item?.id}
            >
              <h2 className="text-xl sm:text-[25px]">{item?.Title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opportunities;
