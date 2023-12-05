"use client";
import useFetchData from "@/hooks/useFetchData";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const [menus, setMenus] = useState([]);
  const [social, setSocial] = useState({});

  const data = useFetchData("footermenus?populate=*");
  const socialData = useFetchData("social?populate=*");

  useEffect(() => {
    if (data?.length > 0) {
      setMenus(data);
    }
  }, [data]);

  useEffect(() => {
    if (socialData) {
      setSocial(socialData);
    }
  }, [socialData]);
  return (
    <footer className="py-[100px] bg-primary">
      <div className="container">
        <div className="w-[80%] md:w-[50%] mx-auto grid sm:grid-cols-3 gap-10">
          {menus?.map((menu) => (
            <div className="text-white" key={menu?.id}>
              <h3 className="text-[30px]">{menu?.attributes?.Title}</h3>
              <ul className="mt-10 flex flex-col gap-1 text-xl font-medium">
                {menu?.attributes?.Menu?.map((item) => (
                  <li key={item?.id}>
                    <Link href={item?.Path}>{item?.Title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="text-white">
            <h3 className="text-[30px]">Social Links</h3>
            <ul className="mt-10 flex gap-8 text-xl font-medium">
              {social?.social?.map((item) => (
                <li key={item?.id}>
                  <Link href={item?.Path}>
                    {item?.Name === "facebook" && (
                      <FaFacebookF className="text-2xl" />
                    )}
                    {item?.Name === "linkedin" && (
                      <FaLinkedin className="text-2xl" />
                    )}
                    {item?.Name === "instagram" && (
                      <RiInstagramFill className="text-2xl" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
