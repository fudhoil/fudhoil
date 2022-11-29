import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="bg-[#222222] w-[30%] h-screen fixed left-0">
        <h1
          className="text-6xl font-extrabold tracking-tight text-[#f9e2b8] sm:text-6xl md:text-7xl m-3"
          style={{
            writingMode: "vertical-rl",
          }}>
          <span className="block xl:inline">Software Engineer</span>
        </h1>
      </div>
      <div className="bg-[#f9e2b8] w-[70%] h-screen fixed right-0">
        <h1 className="text-6xl font-extrabold tracking-tight text-[#222222] sm:text-6xl md:text-7xl m-3">
          <span className="block xl:inline">Software Engineer</span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
