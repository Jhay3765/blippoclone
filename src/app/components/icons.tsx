import React from "react";
import { BsPerson } from "react-icons/bs";
import { LuShoppingBag } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
export default function Icons() {
  return (
    <div className="flex items-center gap-3">
      <BsPerson size={35} />
      <AiOutlineHeart size={35} />
      <LuShoppingBag size={30} />
    </div>
  );
}
