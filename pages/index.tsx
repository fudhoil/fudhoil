import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
// import Contact from "../components/Contact"
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 select-none">
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

      <footer className="snap-start">
        <div className="h-20 bg-[#F7AB0A]/10 sticky">
          <div className="flex justify-center items-center h-full">
            <p className="text-sm text-gray-500">Made with ❤️ by Fudhoil</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
