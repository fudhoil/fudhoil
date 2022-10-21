import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
// import Contact from "../components/Contact"
import Projects from "../components/Projects";
import Link from "next/link";
import { SiHurriyetemlak } from "react-icons/si";

const Home: NextPage = () => {
  const [text, setText] = React.useState("Swipe to see more");
  const [section, setSection] = React.useState("#hero");
  const checkVisible = (el: any) => {
    const elementBoundary = el.getBoundingClientRect();

    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let left = elementBoundary.left;
    let right = elementBoundary.right;

    return (
      top >= 0 &&
      left >= 0 &&
      bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const handleScroll = () => {
    const elems = document.querySelectorAll(".scroll");
    elems.forEach((el) => {
      const visible = checkVisible(el);
      if (visible) {
        setSection("#" + el.id);
        console.log(el.id);
      }
    });
  };

  const Wrapper = () => {
    return (
      <div
        className={`bg-gradient-to-b ${
          section === "#hero"
            ? "from-[#240046]"
            : section === "#about"
            ? "from-[#2F1744]"
            : section === "#experience"
            ? "from-[#3A2D41]"
            : section === "#skills"
            ? "from-[#403940]"
            : section === "#sahabat-museum"
            ? "from-[#4546ae]"
            : section === "#react-amazon-clone"
            ? "from-[#232e3c]"
            : section === "#proxsis-web"
            ? "from-[#3e3d56]"
            : section === "#react-admin-ugm"
            ? "from-[#2e3b54]"
            : section === "#react-native-ugm"
            ? "from-[#9b1b42]"
            : section === "#mcn-web"
            ? "from-[#1f1f53]"
            : section === "#wwc-web"
            ? "from-[#2f2619]"
            : "from-[#020405]"
        } via-[#020405] to-[#020405] h-screen w-screen fixed top-0 left-0 -z-10`}
      />
    );
  };

  const handleWindowResize = () => {
    setSection("#hero");
    if (window.innerWidth < 768) {
      setText("Swipe to see more");
    } else {
      setText("Hold Shift & Scroll to see more");
    }
  };

  React.useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      className={` text-white h-screen snap-y snap-mandatory overflow-x-hidden md:overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5F9DF7]/80 select-none scroll-smooth`}>
      <Head>
        <title>Fudhoil</title>
      </Head>
      <Wrapper />
      <Header />
      <section id="hero" className="scroll snap-start">
        <Hero />
      </section>
      <section id="about" className="scroll snap-center">
        <About />
      </section>
      <section id="experience" className="scroll snap-center">
        <WorkExperience text={text} />
      </section>
      <section id="skills" className="scroll snap-start">
        <Skills />
      </section>
      <section id="projects" className="scroll snap-start">
        <Projects text={text} />
      </section>
      <footer className="absolute bottom-0 w-full z-20">
        <div className="h-20">
          <div className="flex justify-end items-center h-full mr-9 space-x-3">
            <p className="text-sm text-gray-500">
              Made by{" "}
              <Link href={"https://github.com/fudhoil"}>
                <a
                  target={"_blank"}
                  className="underline hover:decoration-[#5F9DF7]">
                  Fudhoil
                </a>
              </Link>
            </p>
            <Link href={"#hero"} className="cursor-pointer">
              <SiHurriyetemlak />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
