"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TbSend } from "react-icons/tb";
import Line from "./Line";

const Contact = () => {
  const [contactData, setContactData] = useState({});
  const [email, setEmail] = useState("");

  const data = useFetchData("contact");

  useEffect(() => {
    if (data) {
      setContactData(data);
    }
  }, [data]);

  // submit handler
  const submitHandler = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          Email: email,
        },
      }),
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contactemails`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response?.data?.attributes?.Email) {
          toast.success("Email Send Successfully.");
          setEmail("");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <section className="bg-secondary px-5 sm:px-0">
      <div className="py-[100px] text-center">
        <div className="container">
          <h2 className="text-[50px] sm:text-[60px] leading-[70px] text-primary">
            {contactData?.Title}
          </h2>
          <Line className="mx-auto" />
          <h3 className="text-[30px] sm:text-[40px] font-semibold mt-5">
            {contactData?.SubTitle}
          </h3>
          <p className="text-[25px] leading-[34px] mt-6 w-[90%] sm:w-[70%] mx-auto">
            {contactData?.Description}
          </p>
          <div className="mt-[85px] w-[90%] md:w-[50%] mx-auto flex items-center justify-between">
            <input
              type="email"
              className="w-full h-[70px] bg-white outline-none px-5 sm:px-[50px] text-[25px] placeholder:text-black"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="w-[150px] h-[70px] bg-primary text-white flex items-center justify-center"
              onClick={submitHandler}
            >
              <TbSend className="text-[40px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
