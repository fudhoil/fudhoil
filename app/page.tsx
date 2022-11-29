"use client";
import Image from "next/image";
import React from "react";

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
      }}>
      <main
        style={{
          height: "120vh",
        }}>
        <div
          style={{
            marginTop: isMobile ? "0" : "1rem",
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
          <div
            style={{
              position: "absolute",
              bottom: "5rem",
              left: "-6rem",
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
            height: isMobile ? "18rem" : "auto",
            overflow: isMobile ? "scroll" : "hidden",
            zIndex: 1,
            backgroundColor: isMobile ? "#f9e2b8" : "transparent",
            fontFamily: "Alaska, sans-serif",
            color: "#222222",
            fontSize: "1rem",
            lineHeight: "1.5rem",
          }}>
          <strong>Driven</strong> focusly as <strong>Software Engineer</strong>.
          In general, i am a (MERN) Full Stack Developer while able to build a
          software in various Stack Tools. Througout this years i have built and
          contributed to several projects both in a teams and personal
          environment.
        </div>
      </main>
    </div>
  );
};

export default Home;
