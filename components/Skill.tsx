import React from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";

type Props = {
  directionLeft?: boolean;
  component?: React.ReactNode;
};

const Skill = ({ directionLeft, component }: Props) => {
  return (
    <div>
      <motion.div
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // viewport={{ once: true }}
      >
        <IconContext.Provider value={{ size: "3.0rem" }}>
          {component}
        </IconContext.Provider>
      </motion.div>
    </div>
  );
};

export default Skill;
