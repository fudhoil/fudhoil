import React from "react";
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
    <div
      className="flex relative flex-col text-left w-full justify-center space-y-5 mx-auto items-center"
      style={{
        height: "100%",
      }}>
      <h3
        className="text-[#5F9DF7] mb-2"
        style={{
          fontFamily: "Alaska, sans-serif",
          fontSize: window.innerWidth > 768 ? "2rem" : "1.5rem",
          fontWeight: "900",
          lineHeight: "1.2",
        }}>
        for sure he understood these stuffs
      </h3>

      <div className="grid grid-cols-5 gap-5">
        <Skill component={<FaNodeJs />} link={"https://nodejs.org/"} />
        <Skill component={<SiLaravel />} link={"https://laravel.com/"} />
        <Skill
          component={<SiJavascript />}
          link={"https://www.javascript.com/"}
        />
        <Skill component={<SiReact />} link={"https://reactjs.org/"} />
        <Skill component={<SiMongodb />} link={"https://www.mongodb.com/"} />
        <Skill component={<SiVercel />} link={"https://www.vercel.com/"} />
        <Skill component={<SiAndroid />} link={"https://www.android.com/"} />
        <Skill component={<SiGithub />} link={"https://www.github.com/"} />
        <Skill
          component={<TbBrandReactNative />}
          link={"https://reactnative.dev/"}
        />
        <Skill component={<SiPhp />} link={"https://www.php.net/"} />
        <Skill
          component={<SiTailwindcss />}
          link={"https://tailwindcss.com/"}
        />
        <Skill
          component={<SiPostgresql />}
          link={"https://www.postgresql.org/"}
        />
        <Skill component={<SiGit />} link={"https://git-scm.com/"} />
        <Skill component={<SiGitlab />} link={"https://about.gitlab.com/"} />
        <Skill component={<SiBootstrap />} link={"https://getbootstrap.com/"} />
        <Skill
          component={<SiGooglecloud />}
          link={"https://cloud.google.com/"}
        />
        <Skill component={<TbBrandNextjs />} link={"https://nextjs.org/"} />
        <Skill component={<SiMysql />} link={"https://www.mysql.com/"} />
        <Skill component={<SiRedux />} link={"https://redux.js.org/"} />
        <Skill
          component={<SiTypescript />}
          link={"https://www.typescriptlang.org/"}
        />
        <Skill
          component={<SiApollographql />}
          link={"https://www.apollographql.com/"}
        />
        <Skill component={<SiDirectus />} link={"https://directus.io/"} />
        <Skill
          component={<SiFirebase />}
          link={"https://firebase.google.com/"}
        />
        <Skill component={<SiGraphql />} link={"https://graphql.org/"} />
      </div>
    </div>
  );
};

export default Skills;
