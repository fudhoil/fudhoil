import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  const [text, counter, backspace] = useTypewriter({
    words: ["name: Fudhoil"],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 40,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media-exp1.licdn.com/dms/image/D5603AQHx0Y6Ux1Ipgw/profile-displayphoto-shrink_800_800/0/1667469046205?e=1672876800&v=beta&t=BuAnLL259XOxCBMcniC-B-rXjEolDcW1vA7Iqfz_Ml0"
        alt=""
        width={200}
        height={200}
        draggable={false}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 mx-5 tracking-[15px] pointer-events-none">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10 pointer-events-none">
          <span className="mr-3">Fudhoil</span>
          <Cursor cursorColor="#5F9DF7" />
        </h1>

        <div className="pt-5 space-x-2 space-y-2">
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
