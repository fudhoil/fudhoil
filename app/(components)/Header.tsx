"use client";
import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const [path, setPath] = React.useState("");

  React.useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        width: "70%",
        height: "3rem",
        display: "flex",
        gap: "1rem",
        backgroundColor: "#c29adc",
        zIndex: 2,
      }}>
      <Link
        href="/"
        style={{
          marginLeft: "auto",
          fontFamily: "Alaska, sans-serif",
          fontSize: "1.5rem",
          fontWeight: "900",
          display: "flex",
          alignItems: "center",
          textDecoration: path === "/" ? "underline #f9e2b8" : "none",
        }}
        className={`${
          path === "/" ? "text-[#fff]" : "text-[#f9e2b8]"
        } hover:text-[#fff]`}
        onClick={() => setPath("/")}>
        home
      </Link>
      <Link
        href="/projects"
        style={{
          marginRight: "auto",
          fontFamily: "Alaska, sans-serif",
          fontSize: "1.5rem",
          fontWeight: "900",
          display: "flex",
          alignItems: "center",
          textDecoration: path === "/projects" ? "underline #f9e2b8" : "none",
        }}
        className={`${
          path === "/projects" ? "text-[#fff]" : "text-[#f9e2b8]"
        } hover:text-[#fff]`}
        onClick={() => setPath("/projects")}>
        projects
      </Link>
    </div>
  );
};

export default Header;
