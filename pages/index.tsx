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
  return (
    <div className="bg-gradient-to-b from-[#240046] via-[#020405] to-[#020405] text-white h-screen snap-y snap-mandatory overflow-x-hidden md:overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#5F9DF7]/80 select-none scroll-smooth">
      <Head>
        <title>Fudhoil</title>
      </Head>
      <Header />
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
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
