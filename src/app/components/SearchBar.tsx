import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
export default function SearchBar() {
  return (
    <div className="text-ThemeDarkGray  lg:hidden bg-gray-100 flex items-center z-40 gap-4 px-4 py-3.5">
      <HiMagnifyingGlass size={32} color="black" />
      <input
        className="bg-transparent"
        type="text"
        placeholder="Search our store"
      />
    </div>
  );
}
