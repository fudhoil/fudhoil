import React from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { DiLaravel } from "react-icons/di";

type Props = {
  directionLeft?: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div>
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{
          duration: 2.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}>
        <IconContext.Provider value={{ size: "3.0rem", color: "#F05340" }}>
          <DiLaravel />
        </IconContext.Provider>
      </motion.div>
    </div>
  );
};

export default Skill;
