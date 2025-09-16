import React from "react";
import SkillCard from "./SkillCard";

type SkillCategoryProps = {
  category: string;
  skills: {
    logo: string;
    name: string;
    strengths: string[];
    experience: string;
  }[];
};

export default function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">{category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
}
