"use client";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
type Props = {
  title: string;
  items?: string[];
};

export default function NavBarItem(props: Props) {
  const { title, items } = props;
  const menu = useRef();
  const [open, setOpen] = useState(false);
  const handleClick = () => {};
  return (
    <button
      onMouseEnter={() => setOpen(!open)}
      onMouseLeave={() => setOpen(!open)}
      className="transition-all duration-500  relative z-40 w-fit  hover:border-b-ThemeGray hover:border-b-4 border-b-4 border-transparent  "
    >
      <div className=" flex items-center gap-2 pt-4  px-2 py-2">
        <h2>{title}</h2>
        <MdOutlineKeyboardArrowDown size={20} />
      </div>
      {/* Dropdown */}
      {open && (
        <ul
          onMouseEnter={() => setOpen(open)}
          className="  transition-all duration-500     bg-white leading-8 text-left text-sm  text-gray-400 absolute top-[50px] w-60 border-b-4 border-gray-500 p-4 z-40"
        >
          {props.items?.map((item, index) => {
            if (item.length === 0) return;
            return (
              <li className="hover:text-ThemeDarkGray " key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </button>
  );
}
