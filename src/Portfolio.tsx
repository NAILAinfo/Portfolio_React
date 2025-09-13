import React from "react";
// @ts-ignore
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";

//import Certifications from "./components/Certifications";
export default function Portfolio() {
  return (
    <>
      <NavBar />
      <Banner />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <Certifications /> */}
    </>
  );
}
