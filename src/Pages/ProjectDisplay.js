import React from "react";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useParams } from "react-router-dom";
import "../Styles/projectdisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="projectdisplay">
      <h1> {project.name}</h1>
      <img src={project.image} alt="img" />
      <p>Skills : {project.skills}</p>
      <a href={project.link} target="_blank">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
