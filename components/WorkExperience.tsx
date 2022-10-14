import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
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
  DiFirebase,
  DiBootstrap,
  DiMaterializecss,
} from "react-icons/di";

type Props = {};

const WorkExperience = (props: Props) => {
  const experience = [
    {
      image:
        "https://lh3.googleusercontent.com/a/ALm5wu0eUucbzea4H4kSut4jBK5DneLdcl6wFClpAk_Lug4=s288-p-rw-no",
      title: "Full Stack Developer",
      company: "Proxsis & Company",
      icon: [
        {
          logo: <DiLaravel />,
          color: "#FF2D20",
        },
        {
          logo: <DiPhp />,
          color: "#777BB4",
        },
        {
          logo: <DiJqueryLogo />,
          color: "#0769AD",
        },
      ],
      date: "2021",
      description: [
        "Developed a web application for a local business using React, Next.js, Tailwind CSS, and Firebase.",
        "Developed a web application for a local business using React, Next.js, Tailwind CSS, and Firebase.",
        "Developed a web application for a local business using React, Next.js, Tailwind CSS, and Firebase.",
      ],
    },
    {
      image:
        "https://lh3.googleusercontent.com/a/ALm5wu0eUucbzea4H4kSut4jBK5DneLdcl6wFClpAk_Lug4=s288-p-rw-no",
      title: "Full Stack Developer",
      company: "Freelance",
      icon: [
        {
          logo: <DiLaravel />,
          color: "#FF2D20",
        },
        {
          logo: <DiReact />,
          color: "#61DAFB",
        },
        {
          logo: <DiNodejs />,
          color: "#339933",
        },
        {
          logo: <DiMongodb />,
          color: "#47A248",
        },
      ],
      date: "2021 - Present",
      description: [
        "Developed a web application for a local business using React, Next.js, Tailwind CSS, and Firebase.",
        "Developed a web application for a local business using React, Next.js, Tailwind CSS, and Firebase.",
        "Developed a web application for a local business using React, Next.js, Tailwind CSS, and Firebase.",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl  text-center z-30">
        Work Experience
      </h3>
      <div className="w-full flex space-x-5 mt-32 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {experience.map((item, index) => (
          <ExperienceCard
            key={index}
            image={item.image}
            title={item.title}
            company={item.company}
            icon={item.icon}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
