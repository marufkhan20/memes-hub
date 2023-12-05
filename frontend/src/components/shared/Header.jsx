"use client";
import useFetchData from "@/hooks/useFetchData";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../ui/Button";

const Header = () => {
  const pathname = usePathname();
  const [menus, setMenus] = useState([]);

  const data = useFetchData("menus");

  useEffect(() => {
    if (data?.length > 0) {
      setMenus(data);
    }
  }, [data]);
  return (
    <header className="py-[14px] header fixed top-0 left-0 right-0 w-full z-50 px-5 sm:px-0">
      <div className="container flex items-center justify-between gap-5">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={187} height={28} />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {menus?.map((menu) => (
            <li
              key={menu?.id}
              className={`transition-all ${
                pathname === menu?.attributes?.Path && "text-primary"
              } hover:text-primary`}
            >
              <Link
                href={menu?.attributes?.Path}
                className="flex items-center gap-2"
              >
                {menu?.attributes?.Title}
              </Link>
            </li>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-5">
          <Button variant="secondary">Login</Button>
          <Button>Signup</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
