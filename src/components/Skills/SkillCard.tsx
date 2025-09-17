import React from "react";
import { ReactNode } from "react";

type SkillCardProps = {
  logo: ReactNode;
  name: string;
  strengths: string[];
  experience: string;
};

export default function SkillCard({ logo, name, strengths, experience }: SkillCardProps) {
  return (
    <div className="skill-card">

      <div className="skill-logo">{logo}</div>

      <h3>{name}</h3>

      <p>Expérience : {experience}</p>
      
      {strengths.length > 0 && (
        <ul>
          {strengths.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
