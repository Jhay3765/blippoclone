"use client";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const moreLinksArr = [
  [
    "Bento & Lunch Boxes",
    "Drinkware",
    "Dining",
    "Kitchen",
    "Bath",
    "Beauty",
    "Office",
    "Home Goods",
  ],
  [
    "Candy",
    "Kawaii Candy",
    "DIY Candy",
    "Snacks",
    "Anime Snacks",
    "Cookies & Biscuits",
    "Chocolate",
    "Food & Drinks",
  ],
  ["Characters", "Brands", "Manufacturers", "Exclusives"],
];

type Props = {
  title: string;
  items?: string[];
};

export default function MoreLinks(props: Props) {
  const { title, items } = props;
  const menu = useRef();
  const [open, setOpen] = useState(false);
  const handleClick = () => {};
  return (
    <button
      onMouseEnter={() => setOpen(!open)}
      onMouseLeave={() => setOpen(!open)}
      className=" z-40  2xl:hidden hover:border-b-ThemeGray hover:border-b-4 border-b-4 border-transparent  "
    >
      <div className=" flex items-center gap-2 pt-4  px-2 py-2">
        <h2>{title}</h2>
        <MdOutlineKeyboardArrowDown size={20} />
      </div>
      {/* Dropdown */}
      {open && (
        <ul
          onMouseEnter={() => setOpen(open)}
          className=" bg-white leading-8 absolute text-left text-gray-400 w-full left-0  border-b-4 border-gray-500 p-6 z-40"
        >
          {props.items?.map((item, index) => {
            if (item.length === 0) return;
            return (
              <li
                className="hover:[&>*]:text-ThemeDarkGray relative   border-b w-48 py-2 hover:text-ThemeGray flex items-center justify-between"
                key={index}
              >
                {item}

                <p>{">"}</p>
              </li>
            );
          })}
        </ul>
      )}
    </button>
  );
}
