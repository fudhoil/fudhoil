import React from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { DiLaravel, DiReact, DiNodejs, DiMongodb } from "react-icons/di";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:-w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="w-12 h-12 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="https://lh3.googleusercontent.com/a/ALm5wu0eUucbzea4H4kSut4jBK5DneLdcl6wFClpAk_Lug4=s288-p-rw-no"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-sm font-light">Laravel Developer</h4>
        <p className="font-bold text-md mt-1">PROXSIS</p>
        <div className="flex space-x-2 my-2">
          <IconContext.Provider value={{ size: "1.5rem", color: "#F05340" }}>
            <DiLaravel />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "1.5rem", color: "#F05340" }}>
            <DiLaravel />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "1.5rem", color: "#F05340" }}>
            <DiLaravel />
          </IconContext.Provider>
          <IconContext.Provider value={{ size: "1.5rem", color: "#F05340" }}>
            <DiLaravel />
          </IconContext.Provider>
        </div>
        <p className="uppercase py-2 text-gray-300 text-sm">2019 - 2020</p>

        <ul className="list-disc space-y-4 ml-5 text-md mb-5">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
