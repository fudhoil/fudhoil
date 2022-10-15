import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import {
  SiLaravel,
  SiReact,
  SiAndroid,
  SiJavascript,
  SiPhp,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiGit,
  SiApollographql,
  SiGraphql,
  SiSqlite,
  SiTailwindcss,
  SiVercel,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 3.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl z-30">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-[#5F9DF7] text-sm">
        Full Stack Developer Hardskils
      </h3>

      <div className="grid grid-cols-4 md:grid-cols-6 gap-5">
        <Skill directionLeft={true} component={<FaNodeJs />} />
        <Skill directionLeft={true} component={<SiLaravel />} />
        <Skill directionLeft={true} component={<SiJavascript />} />
        <Skill directionLeft={true} component={<SiReact />} />
        <Skill directionLeft={true} component={<SiMongodb />} />
        <Skill directionLeft={true} component={<SiVercel />} />
        <Skill directionLeft={true} component={<SiAndroid />} />
        <Skill directionLeft={true} component={<SiGithub />} />
        <Skill directionLeft={true} component={<TbBrandReactNative />} />
        <Skill directionLeft={false} component={<SiPhp />} />
        <Skill directionLeft={false} component={<SiTailwindcss />} />
        <Skill directionLeft={false} component={<SiPostgresql />} />
        <Skill directionLeft={false} component={<SiGit />} />
        <Skill directionLeft={false} component={<SiGitlab />} />
        <Skill directionLeft={false} component={<TbBrandNextjs />} />
        <Skill directionLeft={false} component={<SiMysql />} />
        <Skill directionLeft={false} component={<SiApollographql />} />
        <Skill directionLeft={false} component={<SiGraphql />} />
        <Skill directionLeft={false} component={<SiSqlite />} />
      </div>
    </motion.div>
  );
};

export default Skills;
