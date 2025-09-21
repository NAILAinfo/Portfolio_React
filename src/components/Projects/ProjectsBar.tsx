import React from "react";
import ProjectGrid from "./ProjectsGrid";

const ProjectsBar: React.FC = () => {
  return (
    <section className="projects-section">
      <h1 id="title">Featured Projects </h1>
      {/* Grille des projets */}
      <ProjectGrid />
    </section>
  );
};

export default ProjectsBar;
