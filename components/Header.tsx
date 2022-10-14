import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="sticky top-0 flex items-start p-5 justify-between max-w-2xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center">
        {/* Social Icon */}
        <SocialIcon
          url="https://www.linkedin.com/in/fudhoil"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#000000]"
        />
        <SocialIcon
          url="https://instagram.com/_fudhoil"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#000000]"
        />
        <SocialIcon
          url="https://github.com/fudhoil"
          fgColor="gray"
          bgColor="transparent"
          className="hover:bg-[#000000]"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="mailto:fudhoilhlf@gmail.com"
        />
      </motion.div>
    </header>
  );
};

export default Header;
