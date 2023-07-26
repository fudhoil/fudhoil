import React from "react";
import { IconContext } from "react-icons";

type Props = {
  directionLeft?: boolean;
  component?: React.ReactNode;
  link: string | any;
  detail?: string | any;
};

const Skill = ({ component, detail }: Props) => {
  return (
    <div className="relative group icon p-[0.1rem] md:p-2">
      {/* tooltip */}
      <div className="absolute -top-5 md:-top-10 right-0 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-2 py-1 rounded-md shadow-md whitespace-nowrap hidden group-hover:block">
        {detail}
      </div>
      <IconContext.Provider
        value={{
          size: "2.0rem",
          color: "#c29adc",
        }}>
        {component}
      </IconContext.Provider>
    </div>
  );
};

export default Skill;
