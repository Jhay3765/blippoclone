import React from "react";
import Image from "next/image";
export default function Shop() {
  return (
    <div className="py-12 text-white">
      <ul className=" w-full  grid grid-cols-1  md:flex  ">
        <li className="flex bg-cover bg-center  items-start p-4 flex-col justify-end h-72  md:h-96  rounded-t-3xl md:rounded-tr-none  md:rounded-tl-3xl w-full bg-[url('https://www.blippo.com/cdn/shop/files/footer-sanrio_aa9d26b5-2282-4ff1-8e9d-696c45ac5af2_720x.jpg?v=1688525089')]">
          <button className="bg-ThemeMainPink hover:translate-y-1    rounded-3xl px-4 py-2">
            Shop Sanrio
          </button>
        </li>
        <li className=" md:flex bg-cover bg-center    hidden bg-no-repeat h-96 items-start p-4 flex-col justify-end   w-full  bg-[url('https://www.blippo.com/cdn/shop/files/footer-ghibli_eeefb044-9718-49b4-8934-055a8a82679c_720x.jpg?v=1688525089')]">
          <button className="bg-ThemeMainPink rounded-3xl px-4 py-2">
            Shop Ghibli
          </button>
        </li>
        <li className="flex  bg-cover bg-center     bg-no-repeat  h-72  md:h-96 items-start p-4 flex-col justify-end w-full  md:rounded-tr-3xl   bg-[url('https://www.blippo.com/cdn/shop/files/footer-gachapon_8843d28d-6f3f-420e-84c3-54f45381e998_720x.jpg?v=1688525089')]">
          <button className="bg-ThemeMainPink rounded-3xl px-4 py-2">
            Shop Gachapon
          </button>
        </li>
      </ul>
      <div className="  md:hidden bg-cover bg-center     flex bg-no-repeat h-72 items-start p-4 flex-col justify-end   w-full  bg-[url('https://www.blippo.com/cdn/shop/files/footer-ghibli_eeefb044-9718-49b4-8934-055a8a82679c_720x.jpg?v=1688525089')]">
        <button className="bg-ThemeMainPink rounded-3xl px-4 py-2 ">
          Shop Gachapon
        </button>
      </div>
      <ul className="w-full flex">
        <li className="flex bg-cover bg-center    items-start p-4 flex-col justify-end   w-full rounded-bl-3xl    h-96 bg-[url('https://www.blippo.com/cdn/shop/files/footer-rement_5d8a45d0-731b-4370-96f3-6e76e3d73068.jpg?v=1688525090%20900w%20600h')]">
          <button className="bg-ThemeMainPink rounded-3xl px-4 py-2">
            Shop Re-Ment
          </button>
        </li>
        <li className="flex bg-cover bg-center    items-start p-4 flex-col justify-end   w-full rounded-br-3xl   bg-[url('https://www.blippo.com/cdn/shop/files/footer-sanx_196da062-9f10-45b6-8386-5b784d354c10.jpg?v=1688525089%20900w%20600h')]">
          <button className="bg-ThemeMainPink rounded-3xl px-4 py-2">
            Shop San-X
          </button>
        </li>
      </ul>
    </div>
  );
}
