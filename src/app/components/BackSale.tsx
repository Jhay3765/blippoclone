"use client";

import React from "react";

export default function BackSale() {
  return (
    <div className=" flex   relative h-24  overflow-x-hidden whitespace-nowrap gap-20  ">
      <div className="myDelay">
        <article className="absolute right-0   flex items-center px-10 w-[1600px]  item1 gap-20 ">
          {" "}
          <section className="flex gap-8 items-center">
            <h2 className="font inline-block text-ThemeGray font-extrabold text-4xl">
              Back to School Sale 70% OFF!{" "}
            </h2>
            <button className="inline-block py-3 text-white px-8 bg-ThemeMainPink rounded-3xl">
              SHOP SALE
            </button>{" "}
          </section>
          <section className="flex gap-8 items-center">
            <h2 className="font inline-block text-ThemeGray font-extrabold text-4xl">
              Back to School Sale 70% OFF!{" "}
            </h2>
            <button className="inline-block py-3 text-white px-8 bg-ThemeMainPink rounded-3xl">
              SHOP SALE
            </button>{" "}
          </section>
        </article>
      </div>
      <article className="absolute right-0 item2  flex items-center px-10  w-[1600px]     gap-20 ">
        {" "}
        <section className="flex gap-8 items-center">
          <h2 className="font inline-block text-ThemeGray font-extrabold text-4xl">
            Back to School Sale 70% OFF!{" "}
          </h2>
          <button className="inline-block py-3 text-white px-8 bg-ThemeMainPink rounded-3xl">
            SHOP SALE
          </button>{" "}
        </section>
        <section className="flex gap-8 items-center">
          <h2 className="font inline-block text-ThemeGray font-extrabold text-4xl">
            Back to School Sale 70% OFF!{" "}
          </h2>
          <button className="inline-block py-3 text-white px-8 bg-ThemeMainPink rounded-3xl">
            SHOP SALE
          </button>{" "}
        </section>
      </article>
    </div>
  );
}
