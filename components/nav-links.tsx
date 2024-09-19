"use client";

import { navigation } from "@/constants";
import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  const [active, setActive] = useState("");
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          onClick={() => setActive(item.url)}
          className={`relative block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : ""} p-6 md:py-8 lg:mr-0.25 lg:text-xs lg:font-semibold ${item.url === active ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}`}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
