import React from "react";

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

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} className="project-img" />
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <span className="category">{project.category}</span>

      {/* Liste des langages */}
      <ul className="languages-list">
        {project.Technologies.map((lang, index) => (
          <li key={index} className="language">
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
