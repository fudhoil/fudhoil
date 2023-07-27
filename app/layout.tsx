"use client";
import Head from "./head";
import Header from "./(components)/Header";
import "../styles/globals.css";
import Image from "next/image";
import NextTopLoader from "nextjs-toploader";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = React.useState(false);

  const handleResize = () => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
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
    <html>
      <Head />
      <body
        style={{
          margin: "0",
          padding: "0",
        }}>
        <NextTopLoader color="#f9e2b8" />
        <main
          style={{
            height: "100vh",
            display: "flex",
          }}
          className="bg-[#f9e2b8]">
          <div
            style={{
              fontFamily: "Alaska, sans-serif",
              color: "#f9e2b8",
              width: "20%",
              height: "100%",
              backgroundColor: "#c29adc",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              top: "0",
              left: "0",
              bottom: "0",
            }}>
            <h1
              style={{
                writingMode: "vertical-rl",
                fontWeight: "900",
                // mixBlendMode: "difference",
                color: "#ffffff",
                fontSize: "calc(3rem + 3vw)",
                margin: "3rem auto",
                justifyContent: "center",
              }}
              className={`${isMobile ? "whitespace-nowrap" : ""}`}>
              Software Developer
            </h1>
            {/* <div
              style={{
                display: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                zIndex: 1,
              }}>
              <Image
                src={
                  "https://ik.imagekit.io/4iquqthi3/Copy_of_Fudho_LIKDs2KyQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669743751825"
                }
                width={100}
                height={100}
                layout="responsive"
                objectFit="contain"
                alt="logo"
              />
            </div> */}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "80%",
              overflow: "scroll",
            }}
            className="scrollbar scrollbar-thumb-[#c29adc]">
            <Header />
            <div
              style={{
                marginTop: "3rem",
              }}>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
