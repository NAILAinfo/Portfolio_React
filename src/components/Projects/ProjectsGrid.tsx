import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../../assets/projects.json";

type Project = {
  id: number;
  name: string;
  state: string;
  Featured: string;
  description: string;
  image: string;
  link: string;
  code: string;
  Technologies: string[];
  category: string;
};

const ProjectGrid: React.FC = () => {
  return (
    <div className="projects-grid">
      {projectsData.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
