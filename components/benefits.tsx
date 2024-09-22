import Arrow from "@/assets/svg/Arrow";
import Heading from "@/components/heading";
import Section from "@/components/section";
import { benefits } from "@/constants";
import Image from "next/image";
import { GradientLight } from "./design/Benefits";
import ClipPath from "@/assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />
        <div className="mb-10 flex flex-wrap gap-10">
          {benefits.map((benefit) => (
            <div
              className="relative block bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-sm"
              key={benefit.id}
              style={{
                backgroundImage: `url(${benefit.backgroundUrl.src})`,
              }}
            >
              <div className="pointer-events-none relative z-2 flex min-h-[22rem] flex-col p-[2.4rem]">
                <h5 className="h5 mb-5">{benefit.title}</h5>
                <p className="body-2 mb-6 text-n-3">{benefit.text}</p>
                <div className="mt-auto flex items-center">
                  <Image
                    src={benefit.iconUrl.src}
                    height={48}
                    width={48}
                    alt={benefit.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {benefit.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: `url(#benefits)` }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {benefit.imageUrl && (
                    <Image
                      width={380}
                      height={362}
                      src={benefit.imageUrl}
                      alt={benefit.title}
                      className="size-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
