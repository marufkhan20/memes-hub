"use client";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GoLocation } from "react-icons/go";
import { IoMdMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import Line from "../shared/Line";
import Button from "../ui/Button";

const ContactForm = () => {
  const [contactData, setContactData] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const data = useFetchData("contactpage");

  useEffect(() => {
    if (data) {
      setContactData(data);
    }
  }, [data]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          Name: name,
          Email: email,
          Message: message,
        },
      }),
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contactmessages`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response?.data?.attributes?.Email) {
          toast.success("Message Send Successfully.");
          setName("");
          setEmail("");
          setMessage("");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <section className="-mt-14 z-40 pb-[140px]">
      <div className="container">
        <div className="contact-form pt-[92px] pb-[144px] z-40 px-10 md:px-[120px]">
          <h2 className="text-center text-[50px] sm:text-[60px] text-primary">
            {contactData?.Title}
          </h2>
          <Line className="mx-auto" />

          <div className="flex items-center justify-between gap-5 mt-20 mb-[116px] flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] rounded-full bg-secondary text-primary flex items-center justify-center">
                <IoCallOutline className="text-3xl" />
              </div>
              <h3 className="text-[22px] sm:text-[28px]">
                {contactData?.Number}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] rounded-full bg-secondary text-primary flex items-center justify-center">
                <IoMdMail className="text-3xl" />
              </div>
              <h3 className="text-[22px] sm:text-[28px]">
                {contactData?.Email}
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[50px] h-[50px] rounded-full bg-secondary text-primary flex items-center justify-center">
                <GoLocation className="text-3xl" />
              </div>
              <h3 className="text-[22px] sm:text-[28px]">
                {contactData?.Location}
              </h3>
            </div>
          </div>

          <form onSubmit={submitHandler}>
            <div className="flex flex-col gap-[50px]">
              <div>
                <label htmlFor="name" className="font-semibold text-[25px]">
                  Name
                </label>
                <input
                  className="block w-full text-xl border-b border-[#E0E0E0] outline-none"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email" className="font-semibold text-[25px]">
                  Email
                </label>
                <input
                  className="block w-full text-xl border-b border-[#E0E0E0] outline-none"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message" className="font-semibold text-[25px]">
                  Message
                </label>
                <textarea
                  className="block w-full text-xl border-b border-[#000] outline-none h-[100px]"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div>
                <Button className="w-full rounded-[20px] text-[25px] sm:text-[32px]">
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
