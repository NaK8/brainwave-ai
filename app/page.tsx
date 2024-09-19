import ButtonGradient from "@/assets/svg/ButtonGradient";
import Button from "@/components/button";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pt-[4.75rem] lg:pt-[5.25rem]">
        <Header />
      </div>
      <ButtonGradient />
    </>
  );
}
