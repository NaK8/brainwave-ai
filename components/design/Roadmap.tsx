import { gradient } from "@/assets";
import Image from "next/image";

export const Gradient = () => {
  return (
    <div className="pointer-events-none absolute left-[-30.375rem] top-[18.25rem] w-[56.625rem] opacity-60 mix-blend-color-dodge">
      <div className="absolute left-1/2 top-1/2 size-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <Image
          className="w-full"
          src={gradient}
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};
