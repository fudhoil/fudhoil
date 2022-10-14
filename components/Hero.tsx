import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const [text, counter, backspace] = useTypewriter({
    words: [
      "Hi, The Name's Fudhoil",
      "Guy-who-loves-Code.tsx",
      "Engaged with Stackoverflow",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQF-qbulAQuChQ/profile-displayphoto-shrink_800_800/0/1619186868523?e=1671062400&v=beta&t=GNl6dOVIWMtTaRT7BbDqNIQaukvANc5hLpOktscuEEI"
        alt=""
        width={200}
        height={200}
        draggable={false}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] pointer-events-none">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 pointer-events-none">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#5F9DF7" />
        </h1>

        <div className="pt-5 space-x-2">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
