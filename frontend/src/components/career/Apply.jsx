"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsUpload } from "react-icons/bs";
import Button from "../ui/Button";

const Apply = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [workplaceType, setWorkplaceType] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [employmentType, setemploymentType] = useState("");
  const [resume, setResume] = useState("");

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
          Number: number,
          Workplace_type: workplaceType,
          Job_location: jobLocation,
          Employment_type: employmentType,
        },
      }),
    };

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/applications`, options)
      .then((response) => response.json())
      .then((response) => {
        if (response?.data?.attributes?.Email) {
          toast.success("Application Send Successfully.");
          setName("");
          setEmail("");
          setNumber("");
          setWorkplaceType("");
          setJobLocation("");
          setemploymentType("");
          setResume("");
        }
      })
      .catch((err) => {
        toast.error("Error");
        console.error(err);
      });
  };
  return (
    <section className="pb-[130px]">
      <div className="container">
        <h2 className="text-[50px] sm:text-[60px] text-center">Apply</h2>

        <form onSubmit={submitHandler}>
          <div className="mt-16 bg-[#FBFBFB] p-10">
            <div className="flex flex-col gap-3">
              <div>
                <label htmlFor="" className="text-base text-[#565656]">
                  Full name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full outline-none border border-primary  px-[42px] py-[18px] rounded-[10px] text-base placeholder:text-[#C3C3C3] text-[#565656] mt-3 bg-transparent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="" className="text-base text-[#565656]">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-none border border-primary  px-[42px] py-[18px] rounded-[10px] text-base placeholder:text-[#C3C3C3] text-[#565656] mt-3 bg-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="" className="text-base text-[#565656]">
                  Phone number <span className="text-primary">*</span>
                </label>
                <input
                  type="number"
                  placeholder="Phone number"
                  className="w-full outline-none border border-primary  px-[42px] py-[18px] rounded-[10px] text-base placeholder:text-[#C3C3C3] text-[#565656] mt-3 bg-transparent"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-y-3 mt-10 items-center justify-between gap-x-[70px]">
              <div className="w-full">
                <label htmlFor="" className="text-base text-[#565656]">
                  Workplace type <span className="text-primary">*</span>
                </label>
                <select
                  className="w-full outline-none border border-primary  px-[42px] py-[18px] rounded-[10px] text-base placeholder:text-[#C3C3C3] text-[#565656] mt-3 bg-transparent"
                  onChange={(e) => setWorkplaceType(e.target.value)}
                >
                  <option value="" className="text-primary">
                    Select Workplace
                  </option>
                  <option value="On-site" className="text-primary">
                    On-site
                  </option>
                  <option value="remote" className="text-primary">
                    Remote
                  </option>
                </select>
              </div>
              <div className="w-full">
                <label htmlFor="" className="text-base text-[#565656]">
                  Job location <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Job location"
                  className="w-full outline-none border border-primary  px-[42px] py-[18px] rounded-[10px] text-base placeholder:text-[#C3C3C3] text-[#565656] mt-3 bg-transparent"
                  value={jobLocation}
                  onChange={(e) => setJobLocation(e.target.value)}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-y-3 mt-10 items-center justify-between gap-x-[70px]">
              <div className="w-full">
                <label htmlFor="" className="text-base text-[#565656]">
                  Employment type <span className="text-primary">*</span>
                </label>
                <select
                  className="w-full outline-none border border-primary  px-[42px] py-[18px] rounded-[10px] text-base placeholder:text-[#C3C3C3] text-[#565656] mt-3 bg-transparent"
                  onChange={(e) => setemploymentType(e.target.value)}
                >
                  <option value="" className="text-primary">
                    Select Employment Type
                  </option>
                  <option value="full-time" className="text-primary">
                    Full time
                  </option>
                  <option value="part-time" className="text-primary">
                    Part time
                  </option>
                </select>
              </div>
            </div>

            <div className="mt-7 min-h-[150px] border border-dashed border-primary flex justify-center items-center rounded-md">
              <input
                type="file"
                name=""
                id="resume"
                className="hidden"
                onChange={(e) => setResume(e.target.value)}
              />
              <label
                htmlFor="resume"
                className="text-primary text-sm flex items-center gap-3 cursor-pointer"
              >
                <BsUpload />
                Upload Resume
              </label>
            </div>
            <span className="text-primary text-[10px]">
              Attach file. File size of your documents should not exceed 10MB
            </span>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-10">
              <Button className="rounded-full px-10 py-4">
                Send Application
              </Button>
              <p className="text-primary !text-base">
                By clicking{" "}
                <span className="font-semibold">Send application</span>, you
                agree to our User Agreement, <br />
                Privacy Policy, and Cookie Policy.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Apply;
