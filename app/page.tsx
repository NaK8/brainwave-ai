import ButtonGradient from "@/assets/svg/ButtonGradient";
import Benefits from "@/sections/Benefits";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Collaboration from "@/sections/Collaboration";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
      </div>
      <ButtonGradient />
    </>
  );
}
