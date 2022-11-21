import React from "react";
import "../Styles/navbar.css";
import { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [ExpandNavbar, setExpandNavbar] = useState(false);
  return (
    <header id={ExpandNavbar ? "open" : "close"}>
      <div className="logo">
        <a href="Abdul Rafay-resume.pdf" download="Abdul Rafay-resume.pdf">
          <button className=" button resume-btn">Download Resume</button>
        </a>
      </div>

      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/Education">Education</a>
          </li>
        </ul>
      </nav>
      <div className="icon">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
