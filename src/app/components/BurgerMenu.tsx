"use client";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";
import { useState } from "react";
import { FaInstagram, FaYoutube, FaTiktok, FaPinterest } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { HiMagnifyingGlass } from "react-icons/hi2";
import SearchBar from "./SearchBar";
export default function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="cursor-pointer pr-4" onClick={() => setOpen(!open)}>
        <AiOutlineMenu size={22} />
      </div>
      {open && (
        <div className="transition-all duration-400  bg-ThemeBlue p-7  flex flex-col gap-4 w-full  h-[1000px]  fixed top-0 left-0 z-40">
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl text-black font-bold cursor-pointer px-2"
          >
            <RxCross2 />
          </div>
          {/*SEARCH BAR */}
          <div className="text-gray-700  lg:hidden bg-[#D1DFE5] flex items-center z-40 gap-4 px-4 py-2">
            <HiMagnifyingGlass size={32} color="black" />
            <input
              className="bg-transparent"
              type="text"
              placeholder="Search our store"
            />
          </div>

          <ul className=" px-1 text-[17px] flex flex-col text-black font-medium ">
            <Item text="New" />
            <Item text="Plush & Toys" />
            <Item text="Stationery" />
            <Item text="Accessories" />
            <Item text="Bags" />
            <Item text="Clothing" />
            <Item text="Home" />
            <Item text="Candy & Snacks" />
            <Item text="Shop By" />
          </ul>
          <section className="flex gap-2 text-ThemeMainPink">
            <FaInstagram size={25} />
            <FaPinterest size={25} />
            <FaYoutube size={25} />
            <FaTiktok size={25} />
          </section>
        </div>
      )}
    </>
  );
}
type Props = {
  text: string;
};
function Item(props: Props) {
  const { text } = props;
  return (
    <li className="cursor-pointer  py-4 justify-between flex border-b border-b-gray-400">
      <p>{text}</p>
      <div className="px-6 border-l border-l-gray-400 ">
        <IoIosArrowDown size={18} />
      </div>
    </li>
  );
}
