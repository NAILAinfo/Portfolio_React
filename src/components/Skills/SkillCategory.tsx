import React from "react";
import SkillCard from "./SkillCard";
import { ReactNode } from "react";

type SkillCategoryProps = {
  category: string;
  skills: {
    logo: ReactNode;
    name: string;
    strengths: string[];
    experience: string;
  }[];
};

export default function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div
      style={{
        display: "inline-block", 
        verticalAlign: "top", 
        width: "350px", 
        margin: "10px", 
        padding: "15px",
        background: "white",
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: "600",
          marginBottom: "10px",
          color: "#333",
          textAlign: "center",
        }}
      >
        {category}
      </h2>
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
  );
}
