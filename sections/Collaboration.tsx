import { brainwaveSymbol, check } from "@/assets";
import Button from "@/components/button";
import { LeftCurve, RightCurve } from "@/components/design/Collaboration";
import Section from "@/components/section";
import { collabApps, collabContent, collabText } from "@/constants";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI chat app for seamless collaboration
          </h2>
          <ul className="mb-10 max-w-[22rem] md:mb-4">
            {collabContent.map((collab) => (
              <li key={collab.id} className="mb-3 py-3">
                <div className="flex items-center">
                  <Image
                    src={check}
                    alt={"check mark"}
                    height={24}
                    width={24}
                  />
                  <h6 className="body-2 ml-5">{collab.title}</h6>
                </div>
                {collab.text && (
                  <p className="body-2 mt-3 text-n-4">{collab.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button className="lg:mt-14">Try it now</Button>
        </div>
        <div className="mt-4 lg:ml-auto xl:w-[38rem]">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]">
            {collabText}
          </p>
          <div className="relative left-1/2 flex aspect-square w-[22rem] -translate-x-1/2 scale-75 rounded-full border border-n-6 md:scale-100">
            <div className="m-auto flex aspect-square w-60 rounded-full border border-n-6">
              <div className="m-auto aspect-square w-24 rounded-full bg-conic-gradient p-[0.2rem]">
                <div className="flex size-full items-center justify-center rounded-full bg-n-8">
                  <Image
                    src={brainwaveSymbol}
                    alt="brainwave logo"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, i) => (
                <li
                  key={app.id}
                  className={twMerge(
                    `rotate-${i * 45}`,
                    `absolute left-1/2 top-0 ml-[-1.6rem] h-1/2 origin-bottom`,
                  )}
                >
                  <div
                    className={twMerge(
                      `-rotate-${i * 45}`,
                      `relative top-[-1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border border-n-1/15 bg-n-7`,
                    )}
                  >
                    <Image
                      className="m-auto"
                      src={app.icon}
                      alt={app.title}
                      width={app.width}
                      height={app.height}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
