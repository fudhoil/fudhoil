import React from "react";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import Link from "next/link";

type Props = {
  directionLeft?: boolean;
  component?: React.ReactNode;
  link?: string | any;
};

const Skill = ({ directionLeft, component, link }: Props) => {
  return (
    <div className="hover:scale-125">
      <Link href={link}>
        <a target="_blank" rel="noreferrer">
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
            <IconContext.Provider value={{ size: "2.0rem" }}>
              {component}
            </IconContext.Provider>
          </motion.div>
        </a>
      </Link>
    </div>
  );
};

export default Skill;
