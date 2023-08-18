"use client";
import React, { use } from "react";
import NavBarItem from "./NavBarItem";
import MoreLinks from "./MoreLinks";
import { NavItems, NavItemsItems } from "../utils/util";
import { useState, useEffect } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

import StickyPurpleMsg from "./StickyNavPurple";
import Icons from "./icons";

export default function StickyNav() {
  const [open, setOpen] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const pos = window.scrollY;
    pos >= 160 && setScrolled(true);
    pos <= 159 && setScrolled(false);

    console.log(scrolled);
    setScrollPos(pos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <nav className="sticky top-0 z-40 hidden lg:block text-ThemeGray ">
      <section className="  bg-ThemeBlue flex items-center">
        <ul className="[&>*:nth-child(10)]:hidden  [&>*:nth-child(9)]:hidden  [&>*:nth-child(8)]:hidden  [&>*:nth-child(7)]:hidden 2xl:[&>*:nth-child(7)]:block  2xl:[&>*:nth-child(8)]:block  2xl:[&>*:nth-child(9)]:block     2xl:[&>*:nth-child(10)]:block        max-w-7xl        mx-auto flex gap-4 justify-center text-[16px] font-semibold  text-ThemeDarkGray">
          {scrolled && (
            <>
              <div className="lg:flex items-center gap-2 absolute top-0  pl-8 left-0  py-2">
                <HiMagnifyingGlass size={34} />
                <input
                  type="text"
                  placeholder="Search our store"
                  className="hidden"
                />
              </div>
            </>
          )}

          {open && (
            <>
              {NavItems.map((item, index) => {
                return (
                  <NavBarItem
                    key={index}
                    title={item}
                    items={NavItemsItems[index]}
                  />
                );
              })}
              <button className="pt-4  px-2 py-2.5">Sale</button>
              <MoreLinks
                title="More Links"
                items={["Home", "Candy & Snacks", "Shop By", "Sale"]}
              />
              {scrolled && (
                <>
                  <div className=" bg-ThemeBlue absolute top-0 right-0   2xl:right-36 px-8 py-2  z-40">
                    <Icons />
                  </div>
                </>
              )}
            </>
          )}
        </ul>
      </section>
      <StickyPurpleMsg />
    </nav>
  );
}
