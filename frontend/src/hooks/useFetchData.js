"use client";
import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
        },
      };

      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${url}`, options)
        .then((response) => response.json())
        .then((response) => {
          console.log(typeof response?.data?.attributes);
          setData(
            typeof response?.data?.attributes === "object"
              ? response?.data?.attributes
              : response?.data
          );
        })
        .catch((err) => console.error(err));
    };

    fetchData();
  }, [url]);

  return data || {};
};

export default useFetchData;
