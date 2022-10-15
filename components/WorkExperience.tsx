import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
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
import { TbBrandReactNative } from "react-icons/tb";

type Props = {};

const WorkExperience = (props: Props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  const experience = [
    {
      image:
        "https://lh3.googleusercontent.com/a/ALm5wu0eUucbzea4H4kSut4jBK5DneLdcl6wFClpAk_Lug4=s288-p-rw-no",
      title: "Full Stack Developer",
      company: "Proxsis & Company",
      icon: [
        {
          logo: <SiLaravel />,
          color: "#FF2D20",
        },
        {
          logo: <SiPhp />,
          color: "#777BB4",
        },
        {
          logo: <SiJavascript />,
          color: "#F7DF1E",
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
          logo: <SiLaravel />,
          color: "#FF2D20",
        },
        {
          logo: <SiReact />,
          color: "#61DAFB",
        },
        {
          logo: <FaNodeJs />,
          color: "#339933",
        },
        {
          logo: <SiMongodb />,
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
        <p>
          <span className="text-sm text-[#5F9DF7] tracking-[3px]">
            {(isMobile && "Swipe to see more") || "hold shift & scroll"}
          </span>
        </p>
      </h3>
      <div className="w-full flex space-x-5 mt-32 md:mt-32 px-10 mb-20 overflow-x-scroll snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5F9DF7]/80">
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
