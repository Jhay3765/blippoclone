import React from "react";
import Image from "next/image";
type Props = {
  url: string;
  title?: string;
  text?: string;
};
export default function ImgComp(props: Props) {
  const { url, title, text } = props;
  return (
    <div
      className="cursor-pointer  imgContainer   h-[300px]  lg:h-[800px] rounded-3xl relative flex flex-col justify-end transition-all duration-500 "
      style={{
        background: `url(${url})`,
        backgroundSize: "contain",
      }}
    >
      {/* Regular text shown when larger*/}
      <article className="hidden md:block  p-20 max-w-4xl">
        <p className="text-6xl z-40 text-white  py-8 customTextShadow">
          {title}
        </p>
        <button className="text-white bg-ThemeMainPink py-2 px-6 text-xl rounded-3xl">
          {text}
        </button>
      </article>
    </div>
  );
}
