"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import ImgComp from "./ImgComp";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import BackSale from "./BackSale";

export default function Hero() {
  const colors = ["#FFB4CE", "#FFB4CE", "#C4C6EF"];
  const images = [
    "https://www.blippo.com/cdn/shop/files/blippo-slide_bts-sale_1728x.jpg?v=1691475894",
    "https://www.blippo.com/cdn/shop/files/blippo-slide_pochacho_1728x.jpg?v=1691562035",
    "https://www.blippo.com/cdn/shop/files/blippo-slide_kawaii-box_1728x.jpg?v=1680921203",
  ];
  const text = [
    "Back to School Sale!",
    "Friend of the Month!",
    "Make Every Day Kawii!",
  ];
  const buttons = ["Shop Here", "Shop Pochacco", "Get Kawaii Box"];

  let [count, setCount] = useState(0);
  const [img, setImg] = useState<string>(images[count]);
  let interval: NodeJS.Timeout | null = null;
  const NextButton = () => {
    setCount((prevCount) => {
      if (prevCount >= 2) return 0;
      return prevCount + 1;
    });
  };
  const PrevButton = () => {
    setCount((prevCount) => {
      if (prevCount === 0) return 2;
      return prevCount - 1;
    });
  };
  useEffect(() => {
    interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length);
    }, 9000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  useEffect(() => {
    setImg(images[count]);
  }, [count]);

  return (
    <main className="py-16 -z-40 max-w-[1600px] mx-auto px-5 ">
      <ImgComp url={images[count]} title={text[count]} text={buttons[count]} />
      {/* Smaller box on mobile */}
      <div className="h-52 w-full"></div>
      <article
        style={{
          backgroundColor: colors[count],
        }}
        className="md:hidden  px-4 absolute bottom-36 mx-4 mr-8 bg-ThemePink pb-8  rounded-3xl text-center"
      >
        <p className="text-5xl z-40 text-white  py-8 customTextShadow">
          {text[count]}
        </p>
        <button className="text-white bg-ThemeMainPink py-2 px-8 text-xl rounded-3xl">
          {buttons[count]}
        </button>
      </article>
      <div className="flex justify-between  items-center py-4">
        <button className="" onClick={PrevButton}>
          <AiOutlineArrowLeft size={30} color="rgb(112 112 112)" />
        </button>

        <section className="flex gap-4">
          {count === 0 && (
            <>
              <button
                onClick={() => setCount(0)}
                className="h-[10px] w-[10px] rounded-full border-ThemeGray border"
              ></button>
              <button
                onClick={() => setCount(1)}
                className="h-2 w-2 rounded-full bg-ThemeGray"
              ></button>
              <button
                onClick={() => setCount(2)}
                className="h-2 w-2 rounded-full bg-ThemeGray"
              ></button>
            </>
          )}
          {count === 1 && (
            <>
              <button
                onClick={() => setCount(0)}
                className="h-2 w-2 rounded-full bg-ThemeGray"
              ></button>
              <button
                onClick={() => setCount(1)}
                className="h-[10px] w-[10px] rounded-full border-ThemeGray border"
              ></button>
              <button
                onClick={() => setCount(2)}
                className="h-2 w-2 rounded-full bg-ThemeGray"
              ></button>
            </>
          )}
          {count === 2 && (
            <>
              <button
                onClick={() => setCount(0)}
                className="h-2 w-2 rounded-full bg-ThemeGray"
              ></button>
              <button
                onClick={() => setCount(1)}
                className="h-2 w-2 rounded-full bg-ThemeGray"
              ></button>
              <button
                onClick={() => setCount(2)}
                className="h-[10px] w-[10px] rounded-full border-ThemeGray border"
              ></button>
            </>
          )}
        </section>
        <button className="" onClick={NextButton}>
          <AiOutlineArrowRight size={30} color="rgb(112 112 112)" />
        </button>
      </div>
      <BackSale />
    </main>
  );
}
