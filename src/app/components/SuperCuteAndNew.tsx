import React from "react";
import CuteItem from "./CuteItem";
export default function SuperCuteAndNew() {
  const items = [
    {
      title: "Tokyo Revengers Clear Card With Gum Vol. 2",
      price: "4.00",
      img: "https://www.blippo.com/cdn/shop/files/20230807-1_900x.jpg?v=1691656436",
      img2: "https://www.blippo.com/cdn/shop/files/20230807-2_900x.jpg?v=1691656437",
    },
    {
      title: "BT21 Birthday Cake Figure With Gum",
      price: "7.90",
      img: "https://www.blippo.com/cdn/shop/files/20230807-76_460x.jpg?v=1691654493",
      img2: "https://www.blippo.com/cdn/shop/files/20230807-77_540x.jpg?v=1691654493",
    },
    {
      title: "Pocky Biscuit Sticks - Milk Quinoa & Almond Crush",
      price: "6.90",
      img: "https://www.blippo.com/cdn/shop/files/20230809-5_460x.jpg?v=1691569272",
      img2: "https://www.blippo.com/cdn/shop/files/20230809-6_900x.jpg?v=1691569272",
    },
    {
      title: "Pocky Biscuit Sticks - Chocolate Quinoa & Almond Crush",
      price: "6.90",
      img: "https://www.blippo.com/cdn/shop/files/20230809-8_900x.jpg?v=1691568986",
      img2: "https://www.blippo.com/cdn/shop/files/20230809-9_900x.jpg?v=1691568986",
    },
  ];

  return (
    <div className="text-center">
      <article className="pb-8">
        <h3 className="text-3xl text-ThemeMainPink font-bold ">
          SUPER CUTE & NEW
        </h3>
        <p className="underline text-ThemeMainPink py-2">Shop Here</p>
      </article>

      <ul className="lg:flex grid grid-cols-2 justify-between gap-8">
        {items.map((item, index) => {
          return (
            <CuteItem
              key={index}
              image={item.img}
              image2={item.img2}
              price={item.price}
              title={item.title}
            />
          );
        })}
      </ul>
    </div>
  );
}
