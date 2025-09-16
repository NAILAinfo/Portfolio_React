// src/components/Skills.tsx
//              {/*<Programming Languages /> */}
                {/*<Frontend Development /> */}
                {/*<Backend Development /> */}
                {/*<Database /> */}                
                {/*<Cloud /> */}
                {/*<Tools /> */}

import React from "react";
import { SkillsData } from "./SkillsData";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <div id="skills" className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Mes Compétences Techniques</h1>
      {SkillsData.map((category, index) => (
        <SkillCategory key={index} {...category} />
      ))}
    </div>
  );
}
{/*
                <div id="skl">
                    <h3>Backend development</h3>
                    <ul>
                        <li>Node.js / Express</li>
                        <li>Java (Spring Boot)</li>
                        <li>Python (Django / Flask)</li>
                        <li>RESTful APIs / GraphQL</li>
                    </ul>
                </div>
*/}