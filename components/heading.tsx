import { twMerge } from "tailwind-merge";

interface HeadingProps {
  className?: string;
  title?: string;
}

const Heading = ({ className, title }: HeadingProps) => {
  return (
    <div className={twMerge(`mx-auto mb-12 max-w-[50rem] lg:mb-20`, className)}>
      {title && <h2 className="h2">{title}</h2>}
    </div>
  );
};

export default Heading;
