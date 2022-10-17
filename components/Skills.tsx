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
  SiTailwindcss,
  SiVercel,
  SiGithub,
  SiGitlab,
  SiTypescript,
  SiBootstrap,
  SiFirebase,
  SiGooglecloud,
  SiRedux,
  SiDirectus,
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

      <div className="grid grid-cols-6 gap-5">
        <Skill
          directionLeft={true}
          component={<FaNodeJs />}
          link={"https://nodejs.org/"}
        />
        <Skill
          directionLeft={true}
          component={<SiLaravel />}
          link={"https://laravel.com/"}
        />
        <Skill
          directionLeft={true}
          component={<SiJavascript />}
          link={"https://www.javascript.com/"}
        />
        <Skill
          directionLeft={true}
          component={<SiReact />}
          link={"https://reactjs.org/"}
        />
        <Skill
          directionLeft={true}
          component={<SiMongodb />}
          link={"https://www.mongodb.com/"}
        />
        <Skill
          directionLeft={true}
          component={<SiVercel />}
          link={"https://www.vercel.com/"}
        />
        <Skill
          directionLeft={true}
          component={<SiAndroid />}
          link={"https://www.android.com/"}
        />
        <Skill
          directionLeft={true}
          component={<SiGithub />}
          link={"https://www.github.com/"}
        />
        <Skill
          directionLeft={true}
          component={<TbBrandReactNative />}
          link={"https://reactnative.dev/"}
        />
        <Skill
          directionLeft={true}
          component={<SiPhp />}
          link={"https://www.php.net/"}
        />
        <Skill
          directionLeft={true}
          component={<SiTailwindcss />}
          link={"https://tailwindcss.com/"}
        />
        <Skill
          directionLeft={true}
          component={<SiPostgresql />}
          link={"https://www.postgresql.org/"}
        />
        <Skill
          directionLeft={false}
          component={<SiGit />}
          link={"https://git-scm.com/"}
        />
        <Skill
          directionLeft={false}
          component={<SiGitlab />}
          link={"https://about.gitlab.com/"}
        />
        <Skill
          directionLeft={false}
          component={<SiBootstrap />}
          link={"https://getbootstrap.com/"}
        />
        <Skill
          directionLeft={false}
          component={<SiGooglecloud />}
          link={"https://cloud.google.com/"}
        />
        <Skill
          directionLeft={false}
          component={<TbBrandNextjs />}
          link={"https://nextjs.org/"}
        />
        <Skill
          directionLeft={false}
          component={<SiMysql />}
          link={"https://www.mysql.com/"}
        />
        <Skill
          directionLeft={false}
          component={<SiRedux />}
          link={"https://redux.js.org/"}
        />
        <Skill
          directionLeft={false}
          component={<SiTypescript />}
          link={"https://www.typescriptlang.org/"}
        />
        <Skill
          directionLeft={false}
          component={<SiApollographql />}
          link={"https://www.apollographql.com/"}
        />
        <Skill
          directionLeft={false}
          component={<SiDirectus />}
          link={"https://directus.io/"}
        />
        <Skill
          directionLeft={false}
          component={<SiFirebase />}
          link={"https://firebase.google.com/"}
        />
        <Skill
          directionLeft={false}
          component={<SiGraphql />}
          link={"https://graphql.org/"}
        />
      </div>
    </motion.div>
  );
};

export default Skills;
