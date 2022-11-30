"use client";
import Image from "next/image";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Home = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{
        overflow: "hidden",
        height: "100%",
        marginRight: isMobile ? "1rem" : "auto",
      }}>
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
            bottom: "5rem",
            left: "-6.7rem",
            fontSize: isMobile ? "3.7rem" : "6rem",
            fontWeight: "900",
            fontFamily: "Alaska, sans-serif",
            color: "#ffffff",
            mixBlendMode: "difference",
          }}>
          Fudhoil
        </div>
      </div>
      <div
        style={{
          position: isMobile ? "relative" : "absolute",
          top: isMobile ? "auto" : "3rem",
          border: "2px solid white",
          margin: "1rem 0",
          marginLeft: "1rem",
          padding: "1rem",
          maxWidth: isMobile ? "100%" : "30%",
          height: "18rem",
          overflowY: "scroll",
          overflowX: "hidden",
          zIndex: 1,
          backgroundColor: isMobile ? "#f9e2b8" : "transparent",
          fontFamily: "Alaska, sans-serif",
          color: "#222222",
          fontSize: "1rem",
          lineHeight: "1.5rem",
        }}
        className="scrollbar scrollbar-thumb-[#c29adc]">
        <p className="text-justify indent-8 mb-2">
          <strong>Driven</strong> focusly as <strong>Software Engineer</strong>.
          In general, i am a (MERN) Full Stack Developer while able to build a
          software in various Stack Tools. Througout this years i have built and
          contributed to several projects both in a teams and personal
          environment.
        </p>
        <p className="text-justify indent-8 mb-2">
          <strong>Experienced</strong> in many projects such as{" "}
          <strong>PHP</strong>, <strong>Javascript</strong>, and{" "}
          <strong>Restfull API</strong>
          has provided me with an in-depth understanding of Web Development
          Environments, programming and software engineering projects. I am a
          self-motivated student looking to expand my practical skills in
          information technology and database/software analysis.
        </p>
        <p className="text-justify indent-8">
          As an enthusiastic and passionate learner, I pursue to learn new
          things such as teaching and improving knowledge imparting skills,
          development skill, communicative, and willingness to be{" "}
          <strong>critical</strong>. Passionate about continuos improvement in
          several programming languages and frameworks such as NextJs (React),
          ExpressJs (Node).
        </p>
      </div>
    </div>
  );
};

export default Home;
