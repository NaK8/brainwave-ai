import { twMerge } from "tailwind-merge";
import TagLine from "@/components/tagline";

interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
  tag?: string;
}

const Heading = ({ className, title, text, tag }: HeadingProps) => {
  return (
    <div className={twMerge(`mx-auto mb-12 max-w-[50rem] lg:mb-20`, className)}>
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
