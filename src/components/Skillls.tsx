// src/components/Skills.tsx
//              {/*<Programming Languages /> */}
                {/*<Frontend Development /> */}
                {/*<Backend Development /> */}
                {/*<Database /> */}                
                {/*<Cloud /> */}
                {/*<Tools /> */}

import React from "react";
import "./StyleSkills.css"


export default function Skills() {
  return (
    <section id="skills">
        <h2>Technical skills</h2>
      
        <div id ="globale" >
                <div id="skl" >
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript </li>
                        <li>TypeScript</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>SQL</li>
                    </ul>
                </div>

                <div id="skl">
                    <h3>Frontend development</h3>
                    <ul >
                        <li>React</li>
                        {/*<li>Next.js</li>*/}
                        <li>HTML5 / CSS3</li>
                        <li>Bootstrap </li>
                        {/*<li>Tailwind CSS</li>*/}
                    </ul>
                </div>
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
                <div id="skl">
                    <h3 >Database</h3>
                    <ul>
                        <li>MySQL / PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Firebase</li>
                    </ul>
                </div>

                <div id="skl">
                    <h3>Tools</h3>
                    <ul>
                        <li>Git / GitHub</li>
                        <li>Docker</li>
                        <li>VS Code</li>
                        <li>Canvas</li>
                    </ul>
                </div>
        </div>

    </section>
  );
}
