"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsPersonCircle } from "react-icons/bs";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const routeMap = {
      "/": "Home",
      "/destinations": "Destinations",
      "/packages": "Packages",
      "/login": "Login",
      "/signin": "Login",
    };
    setActiveTab(routeMap[pathname] || "");
  }, [pathname]);

  const linkClasses = (tab) =>
    `pb-[2px] transition duration-300 font-bold ${
      activeTab === tab
        ? "text-[#181E4B] border-b-2 border-b-[#DF6951]"
        : "text-[#181E4B] border-b-2 border-transparent hover:text-[#DF6951]"
    }`;

  return (
    <nav className="flex flex-row justify-around items-center py-2 px-2 shadow-md bg-[#F8FAFC] w-full fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/images/wanderlust.webp"
          height={50}
          width={50}
          alt="wanderlust"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex gap-3.5 md:gap-10 text-sm md:text-lg">
        <Link href="/" className={linkClasses("Home")}>
          Home
        </Link>
        <Link href="/destinations" className={linkClasses("Destinations")}>
          Destinations
        </Link>
        <Link href="/packages" className={linkClasses("Packages")}>
          Packages
        </Link>
      </div>

      {/* Login Links */}
      <div>
        <Link href="/login" className={`block md:hidden ${linkClasses("Login")}`}>
          <BsPersonCircle size={22} />
        </Link>
        <Link href="/login" className={`hidden md:block ${linkClasses("Login")}`}>
          Login
        </Link>
      </div>
    </nav>
  );
};
