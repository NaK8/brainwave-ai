"use client";

import { curve, heroBackground, robot } from "@/assets";
import Section from "@/components/section";
import Image from "next/image";
import Button from "./button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "@/constants";
import { ScrollParallax } from "react-just-parallax";
import { ElementRef, useRef } from "react";
import Generating from "@/components/generating";
import Notification from "@/components/notification";
import CompanyLogos from "./company-logos";

// const Hero = () => {
//   const parallaxRef = useRef<ElementRef<"div">>(null);
//   const mouseRef = useRef<ElementRef<"div">>(null);
//   return (
//     <Section
//       className="mt-[-5.25rem] pt-48"
//       crosses
//       crossesOffset="lg:translate-y-[5.25rem]"
//       customPaddings=""
//       id="hero"
//     >
//       <div className="container relative" ref={parallaxRef}>
//         <div className="relative z-1 mx-auto mb-16 max-w-[62rem] text-center md:mb-20 lg:mb-24">
//           <h1 className="h1 mb-6">
//             Explore the Possibilities
//             <br /> of AI Chatting with{" "}
//             <span className="relative inline-block">
//               Brainwave
//               <Image
//                 src={curve}
//                 alt="curve"
//                 className="absolute left-0 top-full w-full xl:mt-2"
//                 width={624}
//                 height={28}
//               />
//             </span>
//           </h1>
//           <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
//             Unleash the power of AI within Brainwave. Upgrade your productivity
//             with Brainwave, the open AI chat app.
//           </p>
//           <Button href="/pricing" white>
//             Get Started
//           </Button>
//         </div>
//         <div
//           ref={mouseRef}
//           className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24"
//         >
//           <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
//             <div className="relative rounded-2xl bg-n-8">
//               <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />
//               <div className="aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
//                 <Image
//                   src={robot}
//                   alt="ai"
//                   className="w-full translate-y-[8%] scale-[1.7] md:translate-y-[-10%] md:scale-100 lg:translate-y-[-23%]"
//                   width={1024}
//                   height={490}
//                 />

//                 <Generating className="absolute inset-x-4 bottom-5 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />

//                 <ScrollParallax isAbsolutelyPositioned>
//                   <ul className="absolute bottom-[7.5rem] left-[-5.5rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 p-1 backdrop-blur lg:flex">
//                     {heroIcons.map((icon, i) => (
//                       <li className="p-5" key={i}>
//                         <Image src={icon} alt="icon" height={25} width={24} />
//                       </li>
//                     ))}
//                   </ul>
//                 </ScrollParallax>
//                 <ScrollParallax isAbsolutelyPositioned>
//                   <Notification
//                     className="absolute bottom-44 right-[-5.5rem] hidden w-72 xl:flex"
//                     title="code generation"
//                   />
//                 </ScrollParallax>
//               </div>
//             </div>
//             <Gradient />
//           </div>
//           <div className="absolute left-1/2 top-[-54%] w-[234%] -translate-x-1/2 md:top-[-46%] md:w-[138%] lg:top-[-104%]">
//             <Image
//               src={heroBackground}
//               alt="background image"
//               className="w-full"
//               height={1800}
//               width={1440}
//             />
//           </div>
//           <BackgroundCircles parallaxRef={mouseRef} />
//         </div>
//         <CompanyLogos className="relative z-10 mt-20 hidden lg:block" />
//       </div>
//       <BottomLine />
//     </Section>
//   );
// };

// export default Hero;

const Hero = () => {
  const parallaxRef = useRef<ElementRef<"div">>(null);

  return (
    <Section
      className="mt-[-5.25rem] pt-48"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-[3.875rem] max-w-[62rem] text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
            <span className="relative inline-block">
              Brainwave{" "}
              <Image
                src={curve}
                className="absolute left-0 top-full w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative rounded-2xl bg-n-8">
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />

              <div className="aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={robot}
                  className="w-full translate-y-[8%] scale-[1.7] md:translate-y-[-10%] md:scale-100 lg:translate-y-[-23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute inset-x-4 bottom-5 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute bottom-[7.5rem] left-[-5.5rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 p-1 backdrop-blur xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <Image src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="absolute bottom-44 right-[-5.5rem] hidden w-72 xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute left-1/2 top-[-54%] w-[234%] -translate-x-1/2 md:top-[-46%] md:w-[138%] lg:top-[-104%]">
            <Image
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="relative z-10 mt-20 hidden lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
