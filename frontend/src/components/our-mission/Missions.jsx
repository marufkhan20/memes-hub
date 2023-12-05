"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";

const Missions = () => {
  const [missionData, setMissionData] = useState({});

  const data = useFetchData("ourmissionpage?populate[Missions][populate]=*");

  useEffect(() => {
    if (data) {
      setMissionData(data);
    }
  }, [data]);
  return (
    <section className="pb-[150px] px-10 md:px-0">
      <div>
        {/* 1 */}
        {missionData?.Missions?.map((mission, idx) =>
          idx % 2 === 0 ? (
            <div className="flex justify-between gap-6" key={mission?.id}>
              <div className="hidden md:block w-[35%]">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${mission?.Icon?.data?.attributes?.url}`}
                  alt=""
                />
              </div>
              <div className="w-[300px] hidden md:flex flex-col items-center">
                <div className="w-[200px] h-[200px] rounded-full border-[10px] border-primary flex items-center justify-center">
                  <div className="w-[170px] h-[170px] bg-secondary/40 flex items-center justify-center rounded-full">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${mission?.Icon2?.data?.attributes?.url}`}
                      alt=""
                    />
                  </div>
                </div>
                {idx !== missionData?.Missions?.length - 1 && (
                  <div className="h-full w-3 bg-primary"></div>
                )}
              </div>
              <div className="w-full md:w-[45%]">
                <h2 className="text-[30px] sm:text-[40px] mb-10 leading-[44px] mt-14 w-[50%]">
                  {mission?.Title}
                </h2>
                <p className="w-full sm:w-[80%]  pb-[100px]">
                  {mission?.Description}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-between gap-6" key={mission?.id}>
              <div className="w-full md:w-[35%] flex items-end text-right flex-col">
                <h2 className="text-[30px] sm:text-[40px] mb-10 leading-[44px] mt-14 w-[50%]">
                  {mission?.Title}
                </h2>
                <p className="w-full sm:w-[80%]  pb-[100px]">
                  {mission?.Description}
                </p>
              </div>
              <div className="hidden md:flex w-[300px] flex-col items-center">
                <div className="w-[200px] h-[200px] rounded-full border-[10px] border-primary flex items-center justify-center">
                  <div className="w-[170px] h-[170px] bg-secondary/40 flex items-center justify-center rounded-full">
                    <img
                      src={`${process.env.NEXT_PUBLIC_API_URL}${mission?.Icon2?.data?.attributes?.url}`}
                      alt=""
                    />
                  </div>
                </div>
                {idx !== missionData?.Missions?.length - 1 && (
                  <div className="h-full w-3 bg-primary"></div>
                )}
              </div>
              <div className="hidden md:flex w-[45%] justify-end">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${mission?.Icon?.data?.attributes?.url}`}
                  className="h-[338px] w-[338px]"
                  alt=""
                />
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Missions;
