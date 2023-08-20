import React from "react";
import Image from "next/image";
import { HiMagnifyingGlass } from "react-icons/hi2";

import NavBarItem from "./NavBarItem";
import Icons from "./icons";
import BurgerMenu from "./BurgerMenu";
export default function NavBar() {
  return (
    <nav className="text-ThemeGray shadow bg-white z-40 sticky top-0 lg:static ">
      <section className="max-w-[1600px] flex justify-between px-4 mx-auto py-3.5">
        <div className="lg:flex items-center gap-2 hidden ">
          <HiMagnifyingGlass size={34} />
          <input type="text" placeholder="Search our store" />
        </div>
        <div className="lg:hidden flex items-center gap-4 ">
          <BurgerMenu />
          <Image
            src="/logo.avif"
            alt="logo"
            width={100}
            height={200}
            className="mr-24"
          />
        </div>
        <div className="hidden lg:block">
          <Image
            src="/logo.avif"
            alt="logo"
            width={140}
            height={200}
            className="mr-24"
          />
        </div>
        <Icons />
      </section>
    </nav>
  );
}
