import { companyLogos } from "@/constants";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const CompanyLogos = ({ className }: { className?: string }) => {
  return (
    <div className={twMerge(``, className)}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, i) => (
          <li
            key={i}
            className="flex h-[8.5rem] flex-1 items-center justify-center"
          >
            <Image src={logo} alt="logo" width={134} height={28} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
