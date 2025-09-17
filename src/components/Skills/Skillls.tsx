//{/* Programming Languages , Frontend Development , Backend Development , Database , Cloud , Tools , AI */} 
import React from "react";
import SkillCategory from "./SkillCategory";
import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiFirebase, SiVercel, SiGoogleanalytics, SiGooglesheets, SiCanva, SiMysql } from "react-icons/si";

export default function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: [
        { logo: <FaPython />, name: "Python", strengths: ["Pandas", "NumPy", "Flask"], experience: "2 ans" },
        { logo: <SiJavascript />, name: "JavaScript", strengths: ["ES6+", "DOM", "Async/Await"], experience: "2 ans" },
        { logo: <FaJava />, name: "Java", strengths: ["OOP", "Collections", "Swing"], experience: "1 an" },
        { logo: <SiTypescript />, name: "TypeScript", strengths: ["Typing", "Generics", "Interfaces"], experience: "6 mois" }
      ]
    },
    {
      category: "Frontend Development",
      skills: [
        { logo: <FaReact />, name: "React", strengths: ["Hooks", "Context API", "Components"], experience: "1 an" },
        { logo: <FaHtml5 />, name: "HTML5", strengths: ["Semantic HTML", "Forms"], experience: "2 ans" },
        { logo: <FaCss3Alt />, name: "CSS3", strengths: ["Flexbox", "Grid", "Animations"], experience: "2 ans" },
        { logo: <FaBootstrap />, name: "Bootstrap", strengths: ["Responsive design", "UI Components"], experience: "1 an" }
      ]
    },
    {
      category: "Databases & Cloud",
      skills: [
        { logo: <SiMysql />, name: "MySQL", strengths: ["Joins", "Indexes", "Stored Procedures"], experience: "1 an" },
        { logo: <SiMongodb />, name: "MongoDB", strengths: ["Aggregation", "Indexes"], experience: "6 mois" },
        { logo: <SiFirebase />, name: "Firebase", strengths: ["Auth", "Firestore", "Hosting"], experience: "6 mois" },
        { logo: <SiVercel />, name: "Vercel", strengths: ["Deployment", "Serverless"], experience: "débutant" }
      ]
    },
    {
      category: "Tools & Version Control",
      skills: [
        { logo: <FaGitAlt />, name: "Git", strengths: ["Branching", "Merging", "Rebase"], experience: "2 ans" },
        { logo: <FaGithub />, name: "GitHub", strengths: ["Pull Requests", "Actions"], experience: "2 ans" },
        { logo: <SiGooglesheets />, name: "Google Sheets", strengths: ["Formulas", "Data Analysis"], experience: "1 an" },
        { logo: <SiCanva />, name: "Canva", strengths: ["UI Design", "Mockups"], experience: "1 an" },
        { logo: <SiGoogleanalytics />, name: "Google Analytics", strengths: ["Traffic Analysis", "SEO"], experience: "débutant" }
      ]
    }
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "60px 20px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
        <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#333",
            }}
          >
            Technical Skills
        </h1>
              
        {skillsData.map((category, index) => (
        <SkillCategory key={index} category={category.category} skills={category.skills} />
      ))}
    </section>
  );
}
