"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";

const Services = () => {
  const [serviceData, setServiceData] = useState({});

  const data = useFetchData("aboutservice?populate[service][populate]=*");

  useEffect(() => {
    if (data) {
      setServiceData(data);
    }
  }, [data]);
  return (
    <section className="px-5 sm:px-0 relative bg-primary py-20">
      <div className="container">
        <h2 className="text-center text-white text-[50px] sm:text-[60px] font-bold">
          {serviceData?.Title}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 items-center justify-center mt-[74px]">
          {serviceData?.service?.map((service) => (
            <div className="flex flex-col items-center gap-7" key={service?.id}>
              <div className="w-[166px] h-[166px] rounded-full bg-secondary/50 flex items-center justify-center">
                <div className="w-[135px] h-[135px] rounded-full bg-white flex items-center justify-center">
                  <img
                    src={`${process.env.NEXT_PUBLIC_API_URL}${service?.Icon?.data?.attributes?.url}`}
                    alt="service"
                  />
                </div>
              </div>
              <h3 className="text-white font-semibold text-[25px] w-[50%] mx-auto text-center">
                {service?.Title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="flex items absolute top-0 left-0 bottom-0 right-0 z-20 bg-[#625935] w-full">
        <img src="/images/services-1.png" alt="services" />
        <img
          className="absolute top-0 right-0 bottom-0"
          src="/images/services-2.png"
          alt="services"
        />
      </div> */}
    </section>
  );
};

export default Services;
