import { loading } from "@/assets";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface GeneratingProps {
  className?: string;
}

const Generating = ({ className }: GeneratingProps) => {
  return (
    <div
      className={twMerge(
        `flex h-14 items-center rounded-[1.7rem] bg-n-8/80 px-6 text-base`,
        className,
      )}
    >
      <Image className="mr-4 size-5 animate-spin" src={loading} alt="loading" />
      AI is generating
    </div>
  );
};

export default Generating;
