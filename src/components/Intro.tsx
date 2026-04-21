import Animate from "./Animate";
const Intro = () => {
  return (
    <Animate type="pop-y">
      <div
        className="flex flex-col justify-center text-center px-10  semiformal text-secondary"
        id="about"
      >
        <h1 className="">A Bit About Me</h1>

        <p className="mt-2 max-w-[30rem] text-sm">
          I’m a Computer Science student at the{" "}
          <span className="text-faded">
            Federal University of Technology Akure, Nigeria
          </span>
          , where I blend academic theory with real-world coding.
        </p>

        <p className="mt-5 max-w-[30rem] text-sm">
          I'm a self-taught frontend developer currently expanding into mobile
          through Rise Academy. I've sharpened my skills through Frontend Mentor
          challenges and personal projects, building with React, Vite, Next.js,
          and React Native. I care about clean interfaces, good UX, and shipping
          things that work.
        </p>
      </div>
    </Animate>
  );
};

export default Intro;
