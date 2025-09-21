import React from "react";

type Props = {
  filter: string;
  setFilter: (filter: string) => void;
};

const categories = ["all", "webdev", "mobiledev", "ai"];

const ProjectsFilter: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div className="projects-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-btn ${filter === cat ? "active" : ""}`}
          onClick={() => setFilter(cat)}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default ProjectsFilter;
