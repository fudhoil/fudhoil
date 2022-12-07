"use client";
import { Suspense } from "react";
import Loading from "../loading";
import Projects from "./(components)/Projects";

const ProjectsPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div
        style={{
          overflow: "hidden",
          height: "100%",
          marginLeft: "1rem",
        }}>
        <Projects />
      </div>
    </Suspense>
  );
};

export default ProjectsPage;
