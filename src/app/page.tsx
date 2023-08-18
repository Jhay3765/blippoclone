import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Characters from "./components/Characters";
import SuperCuteAndNew from "./components/SuperCuteAndNew";
import CharNew from "./components/CharNew";
import Shop from "./components/Shop";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
      <div className="bg-gradient-to-b from-ThemePink to-white">
        <Hero />
      </div>

      <div className="max-w-[1600px] mx-auto px-5">
        <Characters />
        <SuperCuteAndNew />
        <CharNew />
        <Shop />
      </div>

      <Footer />
    </main>
  );
}
