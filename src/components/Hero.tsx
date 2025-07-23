import React from "react";
import Stack from "./Stack";
import { Marquee } from "./Marquee";
const Hero = () => {
  return (
    <div className="semi-formal select-none ">
      <div className="w-full  py-10   max-w-[45rem] m-auto px-10">
        <div className="hero-left m-auto  flex justify-center items-center overflow-hidden">
          <div className="">
            <img
              src="/assets/images/avatar.png"
              alt=""
              className="w-[12rem] "
            />
          </div>
        </div>

        <div className="flex flex-col  text-center  w-full m-auto  mt-10 items-center">
          <h2 className="text-4xl font-bold  mb-5 max-w-[30rem]">
            I turn businesses like yours <br />
            into{" "}
            <span className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent">
              websites that sell.
            </span>
          </h2>

          <p className=" text-sm text-secondary leading-7 mb-2 max-w-[30rem] text-pretty">
            I’m Jethro Uchechi — a frontend developer focused on building
            high-performance websites with React, Next.js, and TypeScript. From
            layout to logic, I create experiences that convert.
          </p>

          <div className="flex gap-3 justify-center font-bold items-center mt-5 text-xs md:text-[1rem] text-nowrap">
            <div className="rounded-full border-white border bg-white text-tertiary px-10  cursor-pointer py-3 hover:bg-transparent hover:text-white/90 transition-colors duration-300 ease-in-out">
              Get In Touch
            </div>
            <div className="rounded-full border-white/90 border bg-transparent text-white   px-10  cursor-pointer py-3 hover:bg-white/90 hover:text-tertiary transition-colors duration-300 ease-in-out">
              Download CV
            </div>
          </div>
        </div>
      </div>
      <div className="md:mt-10 text-secondary flex flex-col justify-center items-center">
        <h1 className="text-lg uppercase font-medium tracking-wide text-center mb-3">
          Experience With
        </h1>
        <p className="text-center max-w-[30rem] px-10">
          I create modern, user-focused interfaces with React, Next.js, Tailwind
          CSS, and Vite — delivering fast, reliable, and maintainable solutions
          that help businesses stand out and grow online.
        </p>
        <Marquee>
          <Stack
            stack={[
              "html",
              "css",
              "js",
              "react",
              "tailwind",
              "next",
              "typescript",
            ]}
            gap="gap-6 md:gap-14"
          />
        </Marquee>{" "}
      </div>
    </div>
  );
};

export default Hero;
