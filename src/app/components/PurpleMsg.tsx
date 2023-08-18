"use client";
import { useState, useEffect } from "react";

import React from "react";

export default function PurpleMsg() {
  const messages = [
    "Back to School Sale - 70% off",
    "Back to School Kawaii Box!",
  ];
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount((prev) => {
        if (prev >= 1) return 0;
        return 1;
      });
    }, 4000);
  }, []);

  return (
    <section className="bg-ThemePurple lg:hidden">
      <p className="text-ThemeDarkPurple py-2 text-center font-bold text-[15px]">
        {messages[count]}
      </p>
    </section>
  );
}
