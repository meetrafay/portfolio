import React from "react";
import "../Styles/project.css";
import ProjectItem from "../Components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

function Projects() {
  return (
    <>
      <div className="projects">
        <h1>Personal Projects</h1>
        <div className="projectList">
          {ProjectList.map((project, index, visit) => {
            
              return (
                <ProjectItem
                  id={index}
                  name={project.name}
                  image={project.image} />
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
