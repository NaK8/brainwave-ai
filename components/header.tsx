"use client";

import Image from "next/image";
import { brainwave } from "@/assets";
import Link from "next/link";
import Button from "@/components/button";
import MenuSvg from "@/assets/svg/MenuSvg";
import { HamburgerMenu } from "@/components/design/Header";
import { useState } from "react";
import { navigation } from "@/constants";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  const handleNavLinkClick = (url: string) => {
    setActiveLink(url);
    handleClick();
  };
  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b border-n-4 lg:bg-n-8 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <Link href="" className="block w-48 xl:mr-8">
          <Image
            priority={true}
            src={brainwave}
            alt="Logo"
            width={190}
            height={40}
          />
        </Link>
        <nav
          className={`${openNavigation ? "flex" : "hidden"} fixed inset-x-0 bottom-0 top-20 bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div className="relative z-2 m-auto flex flex-col items-center lg:flex-row">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                onClick={() => handleNavLinkClick(item.url)}
                className={`relative block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} p-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${item.url === activeLink ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <Link
          href=""
          className="button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </Link>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>
        <Button
          onClick={toggleNavigation}
          className="ml-auto lg:hidden"
          px="px-3"
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
