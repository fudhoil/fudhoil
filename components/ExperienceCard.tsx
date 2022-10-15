import React from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import Image from "next/image";
import Link from "next/link";
import { GiClick } from "react-icons/gi";

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
  link?: string | any;
};

const ExperienceCard = ({
  image,
  title,
  company,
  icon,
  date,
  description,
  link,
}: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-left lg:items-center mb-5 md:mb-10 space-y-7 flex-shrink-0 mt-20 w-[400px] md:w-[900px] snap-start lg:snap-center bg-[#303030] hover:bg-[#5F9DF7]/20 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        viewport={{ once: true }}
        className="ml-10">
        <Image
          className="w-12 h-12 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
          src={image}
          alt=""
          width={70}
          height={70}
          draggable={false}
        />
      </motion.div>

      <div className="px-0 md:px-10">
        <h4 className="text-sm font-light">{title}</h4>
        <Link href={link} target={"_blank"}>
          <p className="font-bold text-md mt-1 flex underline decoration-[#5F9DF7]">
            {company}
            <IconContext.Provider
              value={{ size: "2.0rem", className: "text-[#5F9DF7]" }}>
              <GiClick className="mt-2 ml-3" />
            </IconContext.Provider>
          </p>
        </Link>
        <div className="flex space-x-2 my-2 bg-[#3a3a3a]">
          {icon &&
            icon.map((item, i) => (
              <IconContext.Provider
                value={{ size: "2.0rem", color: item.color }}
                key={i}>
                {item.logo}
              </IconContext.Provider>
            ))}
        </div>
        <p className="uppercase py-2 text-gray-300 text-sm">{date}</p>

        <ul className="list-disc space-y-4 ml-5 text-md mb-5">
          {description &&
            description.map((item: any, i: any) => (
              <li className="text-gray-300" key={i}>
                {item}
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
