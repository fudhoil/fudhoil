import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center items-center flex flex-col space-y-3 justify-center p-20 md:p-44 h-screen">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              transition={{ duration: 1.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}>
              <Image
                className="w-[200px]"
                src="https://ik.imagekit.io/4iquqthi3/sahabatmuseum_WRHjOZDrF.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665742737611"
                alt="Sahabat Museum"
                width={200}
                height={100}
                layout="intrinsic"
              />
            </motion.div>

            <div className="space-y-5 px-10 md:px-10 max-w-6xl">
              <h4 className="text-xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of 4:
                </span>{" "}
                Sahabit App
              </h4>

              <p className="text-sm text-center md:text-left max-w-2xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Cursus eget nunc scelerisque viverra mauris.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
    </div>
  );
};

export default Projects;
