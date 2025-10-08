import React from "react";
// @ts-ignore
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experiences/Experience";
import Projects from "./components/Projects/ProjectsBar";
import Education from "./components/Education";
import Skills from "./components/Skills/Skillls";
import Blogs from "./components/Blog/Blogs";
import Certifications from "./components/Certifications/Certification";
import Contact from "./components/Contact/Contact";
import './index.css'
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
       <Certifications /> 
       <Blogs /> 
       <Contact />
    </>
  );
}
