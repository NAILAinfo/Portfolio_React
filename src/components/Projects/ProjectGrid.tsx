import { ReactNode } from "react";
import "./StyleProject.css";

export type ProjectCard = {
  img: ReactNode;        
  state: string;         
  link: string;          
  name: string;          
  strengths: string[];   
  description: string;   
};

export default function SkillCard({  }: ProjectCard) {
  return (
    <div className="project-card">
       <div className="project-info">
        <div className="project-logo">{ }</div>
        <div className="project-text">
          
                    


        </div>
      </div>
    </div>
  );
}
