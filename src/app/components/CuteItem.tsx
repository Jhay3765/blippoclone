"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
type Props = {
  image: string;
  title: string;
  price: string;
  image2: string;
};
export default function CuteItem(props: Props) {
  const [hovered, setHovered] = useState(false);
  const { image, title, price, image2 } = props;
  return (
    <li className="flex flex-col   gap-2 text-center">
      <Image
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        src={hovered ? image2 : image}
        alt={title}
        width={390}
        height={400}
        className="rounded-3xl cursor-pointer"
      />
      <p className="text-gray-500 hover:text-pink-600 cursor-pointer">
        {title}
      </p>
      <p className="text-ThemeGray text-xl">US$ {price}</p>
    </li>
  );
}
