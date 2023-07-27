"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();

  return (
    <div
      style={{
        position: "absolute",
        top: "0",
        width: "80%",
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
          textDecoration: pathname === "/" ? "underline #f9e2b8" : "none",
        }}
        className={`${
          pathname === "/" ? "text-[#fff]" : "text-[#f9e2b8]"
        } hover:text-[#fff]`}>
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
          textDecoration:
            pathname === "/projects" ? "underline #f9e2b8" : "none",
        }}
        className={`${
          pathname === "/projects" ? "text-[#fff]" : "text-[#f9e2b8]"
        } hover:text-[#fff]`}>
        projects
      </Link>
    </div>
  );
};

export default Header;
