import { FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiMongodb, SiFirebase, SiVercel, SiGoogleanalytics, SiGooglesheets, SiCanva, SiMysql } from "react-icons/si";

export const SkillsData = [
  {
    category: "Programming Languages",
    skills: [
      { logo: <FaPython />, name: "Python", strengths: [], experience: "" },
      { logo: <SiJavascript />, name: "JavaScript", strengths: [], experience: "" },
      { logo: <FaJava />, name: "Java", strengths: [], experience: "" },
      { logo: <SiTypescript />, name: "TypeScript", strengths: [], experience: "" }
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { logo: <FaReact />, name: "React", strengths: [], experience: "" },
      { logo: <FaHtml5 />, name: "HTML5", strengths: [], experience: "" },
      { logo: <FaCss3Alt />, name: "CSS3", strengths: [], experience: "" },
      { logo: <FaBootstrap />, name: "Bootstrap", strengths: [], experience: "" }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { logo: <SiMysql />, name: "MySQL", strengths: [], experience: "" },
      { logo: <SiMongodb />, name: "MongoDB", strengths: [], experience: "" },
      { logo: <SiFirebase />, name: "Firebase", strengths: [], experience: "" }
    ]
  },
  {
    category: "Tools & Version Control",
    skills: [
      { logo: <FaGitAlt />, name: "Git", strengths: [], experience: "" },
      { logo: <FaGithub />, name: "GitHub", strengths: [], experience: "" },
      { logo: <SiGooglesheets />, name: "Google Sheets", strengths: [], experience: "" },
      { logo: <SiCanva />, name: "Canva", strengths: [], experience: "" }
    ]
  }
];
