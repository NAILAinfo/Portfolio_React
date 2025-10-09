import React from "react";

const About = () => {
  return (
    <section id="About" >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "30px",
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
              <h1 id="title">
                About Me
              </h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  color: "#555",
                }}
              >
                Innovative and versatile Full Stack Developer with expertise in building
                scalable web applications from front-end interfaces to robust back-end
                systems. Skilled in modern technologies such as React, Node.js, and
                databases, with a strong focus on creating elegant, performant, and
                user-friendly solutions. Experienced in project management, team
                collaboration, and independent problem solving, with a passion for
                continuous learning and adapting to new challenges.
              </p>
        </div>
    </section>
  );
};

export default About;
