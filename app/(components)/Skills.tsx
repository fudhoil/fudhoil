import React, { Suspense } from "react";
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
  SiExpress,
  SiVuedotjs,
  SiNuxtdotjs,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative, TbBrandNextjs } from "react-icons/tb";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div
      className="flex relative flex-col text-left w-full justify-center space-y-5 mx-auto items-center"
      style={{
        height: "100%",
      }}>
      <h3
        className="text-[#5F9DF7] mb-2 text-[24px] md:text-[32px]"
        style={{
          fontFamily: "Alaska, sans-serif",
          fontWeight: "900",
          lineHeight: "1.2",
        }}>
        Fully grasps these{" "}
        <span className="underline decoration-white underline-offset-4">
          stacks
        </span>{" "}
        and{" "}
        <span className="underline decoration-white underline-offset-4">
          beyond.
        </span>
      </h3>

      <Suspense
        fallback={
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
          </div>
        }>
        <div className="flex flex-wrap justify-center items-center max-w-[80%] md:max-w-full md:grid md:grid-cols-5 gap-5 mx-4">
          <Skill
            component={<FaNodeJs />}
            link={"https://nodejs.org/"}
            detail={"NodeJS"}
          />
          <Skill
            component={<SiLaravel />}
            link={"https://laravel.com/"}
            detail={"Laravel"}
          />
          <Skill
            component={<SiJavascript />}
            link={"https://www.javascript.com/"}
            detail={"Javascript"}
          />
          <Skill
            component={<SiReact />}
            link={"https://reactjs.org/"}
            detail={"ReactJS"}
          />
          <Skill
            component={<SiMongodb />}
            link={"https://www.mongodb.com/"}
            detail={"MongoDB"}
          />
          <Skill
            component={<SiVercel />}
            link={"https://www.vercel.com/"}
            detail={"Vercel"}
          />
          {/* <Skill component={<SiAndroid />} link={"https://www.android.com/"} /> */}
          <Skill
            component={<SiGithub />}
            link={"https://www.github.com/"}
            detail={"Github"}
          />
          <Skill
            component={<TbBrandReactNative />}
            link={"https://reactnative.dev/"}
            detail={"React Native"}
          />
          <Skill
            component={<SiPhp />}
            link={"https://www.php.net/"}
            detail={"PHP"}
          />
          <Skill
            component={<SiTailwindcss />}
            link={"https://tailwindcss.com/"}
            detail={"TailwindCSS"}
          />
          <Skill
            component={<SiPostgresql />}
            link={"https://www.postgresql.org/"}
            detail={"PostgreSQL"}
          />
          <Skill
            component={<SiGit />}
            link={"https://git-scm.com/"}
            detail={"Git"}
          />
          <Skill
            component={<SiGitlab />}
            link={"https://about.gitlab.com/"}
            detail={"Gitlab"}
          />
          <Skill
            component={<SiBootstrap />}
            link={"https://getbootstrap.com/"}
            detail={"Bootstrap"}
          />
          {/* <Skill
          component={<SiGooglecloud />}
          link={"https://cloud.google.com/"}
          detail={"Google Cloud"}
        /> */}
          <Skill
            component={<TbBrandNextjs />}
            link={"https://nextjs.org/"}
            detail={"NextJS"}
          />
          <Skill
            component={<SiMysql />}
            link={"https://www.mysql.com/"}
            detail={"MySQL"}
          />
          <Skill
            component={<SiRedux />}
            link={"https://redux.js.org/"}
            detail={"Redux"}
          />
          <Skill
            component={<SiTypescript />}
            link={"https://www.typescriptlang.org/"}
            detail={"Typescript"}
          />
          <Skill
            component={<SiApollographql />}
            link={"https://www.apollographql.com/"}
            detail={"Apollo GraphQL"}
          />
          <Skill
            component={<SiDirectus />}
            link={"https://directus.io/"}
            detail={"Directus"}
          />
          <Skill
            component={<SiFirebase />}
            link={"https://firebase.google.com/"}
            detail={"Firebase"}
          />
          <Skill
            component={<SiGraphql />}
            link={"https://graphql.org/"}
            detail={"GraphQL"}
          />
          <Skill
            component={<SiExpress />}
            link={"https://expressjs.com/"}
            detail={"ExpressJS"}
          />
          <Skill
            component={<SiVuedotjs />}
            link={"https://v3.vuejs.org/"}
            detail={"VueJS"}
          />
          <Skill
            component={<SiNuxtdotjs />}
            link={"https://nuxtjs.org/"}
            detail={"NuxtJS"}
          />
        </div>
      </Suspense>
    </div>
  );
};

export default Skills;
