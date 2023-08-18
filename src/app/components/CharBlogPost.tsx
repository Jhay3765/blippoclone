import React from "react";
import Image from "next/image";
type Props = {
  image: string;
  title: string;
  text: string;
};
export default function CharBlogPost(props: Props) {
  const { image, title, text } = props;
  return (
    <li className="">
      <Image
        src={image}
        alt=""
        width={1000}
        height={700}
        className="rounded-3xl"
      />
      <article className="flex flex-col gap-4 px-8 py-8">
        <h2 className="text-ThemeMainPink text-2xl   md:text-3xl font-bold">
          {title}
        </h2>
        <p>{text}</p>
        <p className="text-ThemeMainPink underline cursor-pointer">Read more</p>
      </article>
      <li className="border-b border-b-gray-300 my-4"></li>
    </li>
  );
}
