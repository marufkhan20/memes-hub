"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Reviews = () => {
  // slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % reviewData?.Reviews?.length
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + reviewData?.Reviews?.length) %
        reviewData?.Reviews?.length
    );
  };

  // get data
  const [reviewData, setReviewData] = useState({});

  const data = useFetchData("aboutreview?populate[Reviews][populate]=*");

  useEffect(() => {
    if (data) {
      setReviewData(data);
    }
  }, [data]);
  return (
    <section className="pt-[150px] pb-[100px]">
      <div className="container">
        <div className="w-[90%] lg:w-[60%] mx-auto text-center">
          <h2 className="text-[50px] md:text-[60px] w-full lg:w-[80%] leading-[64px] md:leading-[88px] mx-auto">
            {reviewData?.Title}
          </h2>

          <div className="mt-11">
            <div className="flex flex-col justify-center items-center">
              <div className="mb-7">
                <img
                  src={`${process.env.NEXT_PUBLIC_API_URL}${
                    reviewData?.Title &&
                    reviewData?.Reviews[currentIndex]?.Avatar?.data?.attributes
                      ?.url
                  }`}
                  alt="user"
                />
              </div>
              <div className="flex items-center justify-between gap-5">
                <button
                  className="w-[76px] h-[76px] rounded-full bg-secondary flex items-center justify-center text-primary text-2xl cursor-pointer"
                  onClick={goToPrevSlide}
                  disabled={currentIndex === 0}
                >
                  <BsArrowLeft />
                </button>
                <div className="mx-auto w-[80%] relative">
                  <p className="!leading-[32px] !text-base w-[80%] mx-auto">
                    {reviewData?.Title &&
                      reviewData?.Reviews[currentIndex]?.Review}
                  </p>
                  <img
                    src="/images/quotes.svg"
                    alt="quotes"
                    className="absolute -top-10 left-5"
                  />
                </div>
                <button
                  className="w-[76px] h-[76px] rounded-full bg-secondary flex items-center justify-center text-primary text-2xl cursor-pointer"
                  onClick={goToNextSlide}
                  disabled={currentIndex === reviewData?.Reviews - 1}
                >
                  <BsArrowRight />
                </button>
              </div>
              <h3 className="mt-4 !text-base font-bold">
                {reviewData?.Title && reviewData?.Reviews[currentIndex]?.Name} -{" "}
                {reviewData?.Title &&
                  reviewData?.Reviews[currentIndex]?.Position}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
