import React from "react";

type Props = {};

const SkillsComponent = (props: Props) => {
  return (
    <div
      id="skills"
      style={{
        boxShadow: "inset 0 0 30px 2px #6e4c85",
        height: "calc(100vh - 3.5rem)",
      }}
      className="w-full bg-[#c29adc] flex flex-col justify-center items-center sticky overflow-x-hidden top-0">
      <section>
        <h2 className="text-3xl font-semibold text-center">Skills</h2>
      </section>
    </div>
  );
};

export default SkillsComponent;
