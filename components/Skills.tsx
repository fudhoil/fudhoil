import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import {
  DiLaravel,
  DiReact,
  DiAndroid,
  DiJavascript,
  DiJqueryLogo,
  DiGoogleCloudPlatform,
  DiPhp,
  DiPostgresql,
  DiMongodb,
  DiNodejs,
  DiMysql,
  DiGit,
} from "react-icons/di";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-30">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#5F9DF7] text-sm">
        Full Stack Developer Hardskils
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill directionLeft={true} component={<DiLaravel />} />
        <Skill directionLeft={true} component={<DiMongodb />} />
        <Skill directionLeft={true} component={<DiJavascript />} />
        <Skill directionLeft={true} component={<DiReact />} />
        <Skill directionLeft={true} component={<DiAndroid />} />
        <Skill directionLeft={true} component={<DiPhp />} />
        <Skill directionLeft={false} component={<DiJqueryLogo />} />
        <Skill directionLeft={false} component={<DiNodejs />} />
        <Skill directionLeft={false} component={<DiGoogleCloudPlatform />} />
        <Skill directionLeft={false} component={<DiPostgresql />} />
        <Skill directionLeft={false} component={<DiGit />} />
        <Skill directionLeft={false} component={<DiMysql />} />
      </div>
    </motion.div>
  );
};

export default Skills;
