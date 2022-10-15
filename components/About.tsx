import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  const [phoneScreen, setPhoneScreen] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 768) {
      setPhoneScreen(false);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-align md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pointer-events-none">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}>
        <Image
          src="https://media-exp1.licdn.com/dms/image/C4D03AQF-qbulAQuChQ/profile-displayphoto-shrink_800_800/0/1619186868523?e=1671062400&v=beta&t=GNl6dOVIWMtTaRT7BbDqNIQaukvANc5hLpOktscuEEI"
          className="mt-20 md:mt-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-58 md:h-90 xl:w-[300px] xl:h-[300px]"
          alt=""
          width={phoneScreen ? 220 : 300}
          height={phoneScreen ? 220 : 300}
          draggable={false}
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10 text-start max-w-xl md:max-w-sm lg:max-w-xl">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#5F9DF7]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm">
          Driven focusly as Software Engineer. In general, i am a (MERN) Full
          Stack Developer while able to build a software in various Stack Tools.
          Througout this years i've built and contributed to several projects
          both in a teams and personal environment.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
