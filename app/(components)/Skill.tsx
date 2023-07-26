import React from "react";
import { IconContext } from "react-icons";
import Link from "next/link";

type Props = {
  directionLeft?: boolean;
  component?: React.ReactNode;
  link?: string | any;
};

const Skill = ({ component, link }: Props) => {
  return (
    <div className="hover:scale-125">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div>
          <IconContext.Provider
            value={{
              size: "2.0rem",
              color: "#c29adc",
            }}>
            {component}
          </IconContext.Provider>
        </div>
      </Link>
    </div>
  );
};

export default Skill;
