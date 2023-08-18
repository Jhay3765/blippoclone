import React from "react";
import Image from "next/image";
export default function Characters() {
  return (
    <main>
      <h2 className="text-ThemeMainPink text-4xl font-bold py-8 text-center">
        POPULAR CHARACTERS!
      </h2>
      <ul className="md:flex grid grid-cols-2 gap-8">
        <li className="flex flex-col gap-2 items-center">
          <Image
            src="https://www.blippo.com/cdn/shop/collections/kirby_460x.jpg?v=1685072237"
            alt="Kirby Store"
            width={377}
            height={400}
            className="rounded-3xl"
          />
          <h3 className="cursor-pointer text-ThemeMainPink underline">
            Kirby Store
          </h3>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <Image
            src="https://www.blippo.com/cdn/shop/collections/cinnamoroll_460x.jpg?v=1685430327"
            alt="Kirby Store"
            width={377}
            height={400}
            className="rounded-3xl"
          />
          <h3 className="cursor-pointer text-ThemeMainPink underline">
            Cinnamoroll
          </h3>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <Image
            src="https://www.blippo.com/cdn/shop/collections/rilakkuma_460x.jpg?v=1685072309"
            alt="Kirby Store"
            width={377}
            height={400}
            className="rounded-3xl"
          />
          <h3 className="text-ThemeMainPink cursor-pointer underline">
            Rilakkuma Shop
          </h3>
        </li>
        <li className="flex flex-col gap-2 items-center">
          <Image
            src="https://www.blippo.com/cdn/shop/collections/kuromi_460x.jpg?v=1685430311"
            alt="Kirby Store"
            width={377}
            height={400}
            className="rounded-3xl"
          />
          <h3 className="text-ThemeMainPink cursor-pointer underline">
            Kuromi
          </h3>
        </li>
      </ul>
      <section className="flex flex-col items-center  lg:flex-row justify-between gap-8 py-8">
        <div className=" w-fit ">
          <Image
            src="https://www.blippo.com/cdn/shop/files/900px_fukubukuro-bag_900x.jpg?v=1686810956"
            alt="bag"
            width={754}
            height={600}
            className="rounded-t-3xl"
          />
          <article className="px-2   sm:px-8 py-16 bg-ThemeMiddlePink text-ThemeGray  h-62  rounded-b-3xl   flex flex-col gap-8 items-center">
            <p>10 randomly selected kawaii items!</p>
            <h3 className="whitespace-nowrap  text-ThemeMainPink text-3xl font-extrabold">
              Surprise Kawaii Bag!{" "}
            </h3>
            <button className="bg-ThemeMainPink text-white px-5 p-2 rounded-3xl">
              Shop Here
            </button>
          </article>
        </div>
        <div className="w-fit ">
          <article className="bg-ThemeDarkBlue py-16 px-2   sm:px-8 rounded-t-3xl text-ThemeGray  flex h-62 flex-col gap-8 text-center items-center">
            <p className="">Get 10 random Japanese candies & snacks!</p>
            <h3 className="whitespace-nowrap text-ThemeDarkPink text-3xl font-extrabold">
              Mystery Candy Bag!{" "}
            </h3>
            <button className="bg-ThemeMainPink text-white px-5 p-2 rounded-3xl">
              Shop Here
            </button>
          </article>
          <Image
            src="https://www.blippo.com/cdn/shop/files/900px_fukubukuro-candy_900x.jpg?v=1686811098"
            alt="bag"
            width={754}
            height={600}
            className="rounded-b-3xl"
          />
        </div>
      </section>
    </main>
  );
}
