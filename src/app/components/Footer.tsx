import React from "react";
import { FaInstagram, FaYoutube, FaTiktok, FaPinterest } from "react-icons/fa";
export default function Footer() {
  return (
    <div className="bg-ThemeMainPink text-white py-8">
      <section className="max-w-[1600px] px-4 mx-auto grid grid-cols-2   md:flex justify-between leading-9">
        <ul className="">
          <li className="font-bold py-1">Help</li>
          <li>Contact Us</li>
          <li>Order Tracking</li>
          <li>Shipping </li>
          <li>Returns</li>
        </ul>
        <ul>
          <li className="font-bold py-1">About Us</li>
          <li>Affiliate Program</li>
          <li>For Creators</li>
          <li>Character News Blog</li>
          <li>Reviews</li>
        </ul>
        <ul>
          <li className="font-bold py-1">Shop</li>
          <li>Gift Cards</li>
          <li>Fukubukoro</li>
          <li>Kawaii Box</li>
        </ul>
        <ul>
          <li className="font-bold py-1">Be the first to know!</li>
          <input
            className="hidden md:block  px-4 py-2 rounded-3xl"
            type="text"
            placeholder="Email"
          />
          <li className="py-2">Receive the latest kawaii news and deals!</li>
          <li className="flex gap-2">
            <FaInstagram size={25} />
            <FaPinterest size={25} />
            <FaYoutube size={25} />
            <FaTiktok size={25} />
          </li>
        </ul>
      </section>
      <article className="px-4 md:hidden py-4">
        <p className="font-bold py-1">Be the first to know!</p>
        <input
          className=" px-4 py-2 rounded-3xl"
          type="text"
          placeholder="Email"
        />
      </article>

      <p className="px-2  max-w-[1600px] mx-auto text-sm py-2  md:py-6">
        Copyright © 2023 Blippo Kawaii Shop® - Member of Kawaii Group - Terms &
        Conditions - Privacy Policy
      </p>
    </div>
  );
}
