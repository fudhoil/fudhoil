"use client";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";
import IntroComponent from "./(components)/IntroComponent";
// import SkillsComponent from "./SkillsComponent";

const HomePage = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const [isTablet, setIsTablet] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else if (window.innerWidth < 1024) {
      setIsTablet(true);
    } else {
      setIsMobile(false);
      setIsTablet(false);
    }
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        overflow: "hidden",
        height: "100%",
        marginRight: isMobile ? "1rem" : "auto",
        position: "relative",
      }}>
      {/* image */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          marginLeft: "auto",
          maxWidth: "50%",
          position: "relative",
          height: "80vh",
        }}>
        <Image
          src="https://ik.imagekit.io/4iquqthi3/me_qjrtT7Vr9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669726026924"
          layout="fill"
          objectFit="cover"
          alt="me"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/fudhoil"
          target={"_blank"}
          fgColor="#c29adc"
          bgColor="transparent"
          className="hover:bg-[#061d47]"
        />
        <SocialIcon
          url="https://instagram.com/_fudhoil"
          target={"_blank"}
          fgColor="#c29adc"
          bgColor="transparent"
          className="hover:bg-[#061d47]"
        />
        <SocialIcon
          url="https://github.com/fudhoil"
          target={"_blank"}
          fgColor="#c29adc"
          bgColor="transparent"
          className="hover:bg-[#061d47]"
        />
        <div
          style={{
            position: "absolute",
            bottom: isTablet ? "7rem" : "7rem",
            left: isMobile ? "-7.5rem" : isTablet ? "7rem" : "3rem",
            fontSize: isMobile ? "3.7rem" : "6rem",
            fontWeight: "900",
            fontFamily: "Alaska, sans-serif",
            color: "#fff",
            mixBlendMode: "difference",
            // writingMode: isMobile ? "horizontal-tb" : "vertical-rl",
          }}>
          Fudhoil
        </div>
      </div>
      {/* intro component */}
      <div
        id="intro"
        style={{
          position: isMobile ? "relative" : "absolute",
          top: isMobile ? "auto" : "0",
          border: "2px solid white",
          margin: "1rem 1rem",
          padding: "1rem",
          width: isMobile ? "93%" : "45%",
          height: isMobile ? "auto" : "80vh",
          overflowY: "scroll",
          overflowX: "hidden",
          zIndex: 1,
          fontFamily: "Alaska, sans-serif",
          color: "#222222",
          fontSize: "1rem",
          lineHeight: "1.5rem",
        }}
        className="scrollbar-thin scrollbar-thumb-[#c29adc]">
        <IntroComponent />
      </div>
    </div>
  );
};

export default HomePage;
