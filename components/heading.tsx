import { twMerge } from "tailwind-merge";

interface HeadingProps {
  className?: string;
  title?: string;
  text?: string;
}

const Heading = ({ className, title, text }: HeadingProps) => {
  return (
    <div className={twMerge(`mx-auto mb-12 max-w-[50rem] lg:mb-20`, className)}>
      {title && <h2 className="h2">{title}</h2>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
