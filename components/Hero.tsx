import React from "react";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Spotlight } from "./ui/Spotlight-new";
import { BackgroundLines } from "./ui/background-lines";
import { FaChevronCircleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        {/* <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-40 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80  h-screen z-20" fill="cyan" /> */}

        <div className="h-[60vh] w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.01] bg-grid-black/[0.2] flex items-center justify-center relative top-0 left-0">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100  [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
          <Spotlight />
          <div className="flex justify-center relative my-20 z-10">
            <BackgroundLines className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
              <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                Modern Websites with Next.js
              </h2>
              <TextGenerateEffect
                words="Elevate your brand with a dynamic web experience"
                className="text-center text-[60px] md:text-5xl lg:text-6xl"
              />

              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl animate-opacity delay-150">
                Hi, I&apos;m Devon, a Full-stack Web Dev in Melbourne
              </p>

              <a href="#about">
                <MagicButton
                  title="See my work"
                  icon={<FaChevronCircleDown />}
                  position="right"
                />
              </a>
            </BackgroundLines>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
