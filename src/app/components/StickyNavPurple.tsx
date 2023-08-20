"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from "react";

export default function StickyPurpleMsg() {
  const animationVariants = {
    initial: { x: -1000 }, // Initial position off-screen to the left
    animate: { x: 0, transition: { duration: 1, ease: "easeInOut" } }, // Regular position with animation
  };
  const messages = [
    "Back to School Sale - 70% off",
    "Back to School Kawaii Box!",
  ];
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount === 1 ? 0 : 1));
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section key={count} className="bg-ThemePurple hidden lg:block">
      <p className="text-ThemeDarkPurple py-2  text-center font-bold text-[15px]">
        <motion.h1
          initial="initial"
          animate="animate"
          variants={animationVariants}
        >
          {messages[count]}
        </motion.h1>
      </p>
    </section>
  );
}
