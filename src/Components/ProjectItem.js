import React from "react";
import "../Styles/projectitem.css";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const Navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        Navigate("/projects/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />

      <h2>{name}</h2>
    </div>
  );
}

export default ProjectItem;
