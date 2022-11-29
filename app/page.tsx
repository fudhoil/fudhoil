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
      }}>
      <div
        style={{
          position: "absolute",
          border: "2px solid white",
          margin: "1rem",
          padding: "1rem",
          maxWidth: isMobile ? "100%" : "30%",
          height: isMobile ? "5rem" : "auto",
          overflow: isMobile ? "scroll" : "hidden",
          bottom: isMobile ? "0" : "auto",
          zIndex: 1,
          backgroundColor: isMobile ? "#f9e2b8" : "transparent",
        }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
        blanditiis architecto commodi dolorum nihil, tempora illum. Similique,
        temporibus. Itaque, animi odit voluptates minus repellendus deleniti
        doloremque exercitationem consequatur impedit nemo?
      </div>
      <div
        style={{
          margin: "1rem",
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
            color: "#f9e2b8",
            mixBlendMode: "difference",
          }}>
          fudhoil
        </div>
      </div>
    </div>
  );
};

export default Home;
