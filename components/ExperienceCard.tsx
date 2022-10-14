import React from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import Image from "next/image";

type Props = {
  image?: string | any;
  title?: string;
  company?: string;
  icon?: {
    logo: React.ReactNode;
    color: string;
  }[];
  date?: string;
  description?: string | any;
};

const ExperienceCard = ({
  image,
  title,
  company,
  icon,
  date,
  description,
}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:-w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}>
        <Image
          className="w-12 h-12 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          src={image}
          alt=""
          width={100}
          height={100}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-sm font-light">{title}</h4>
        <p className="font-bold text-md mt-1">{company}</p>
        <div className="flex space-x-2 my-2">
          {icon &&
            icon.map((item, i) => (
              <IconContext.Provider
                value={{ size: "1.5rem", color: item.color }}
                key={i}>
                {item.logo}
              </IconContext.Provider>
            ))}
        </div>
        <p className="uppercase py-2 text-gray-300 text-sm">{date}</p>

        <ul className="list-disc space-y-4 ml-5 text-md mb-5">
          {description &&
            description.map((item: any) => (
              <li className="text-gray-300">{item}</li>
            ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
