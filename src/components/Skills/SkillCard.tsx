import { ReactNode } from "react";
import "./StyleSkills.css";

type SkillCardProps = {
  logo: ReactNode;
  name: string;
  strengths: string[];
  experience: string;
};

export default function SkillCard({ logo, name, strengths, experience }: SkillCardProps) {
  return (
    <div className="skill-card">
      {/* Logo + Texte */}
      <div className="skill-info">
        <div className="skill-logo">{logo}</div>
        <div className="skill-text">
          <h3>{name}</h3>
          {strengths.length > 0 && (
            <p>{strengths.join(" • ")}</p>
          )}
        </div>
      </div>

      {/* Expérience */}
      <div className="skill-exp">
        <span className="clock">⏲</span>
        {experience}
      </div>
    </div>
  );
}
