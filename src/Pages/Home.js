import React from "react";
import "../Styles/home.css";
import CertificateItems from "../Components/CertificateItems";
import Typewriter from "typewriter-effect";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <>
      <section className="home">
        <div className="introduction">
          <h1 className="name">
            Hi ,
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  "I m Abdul Rafay",
                  "I m a Software Engineer",
                  "I m a FullStack Developer",
                ],
              }}
            />
          </h1>

          <p className="discribtion">
            A software developer with a passion for learning and creating.
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/rafayhere"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=khanrafay358@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
          </a>
          <a
            href="https://github.com/meetrafay"
            rel="noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </section>
      <section className="skills">
        <div className="heading">
          <h1>Skills</h1>
        </div>
        <div className="skill">
          <h2 className="heading">Front-End</h2>
          <p>JavaScript , Html , Css , React , Boostrap , Tailwind css</p>
        </div>
        <div className="skill">
          <h2 className="heading">Back-End</h2>
          <p>
            Python , Django , Flask , Pandas , Numpy , SQL , Jinja template
            language
          </p>
        </div>
        <div className="skill">
          <h2 className="heading">Others</h2>
          <p>
            Github , Software Quality Assurance , Software Requirement ,
            Software Development Life Cycle , Multi Tasking , Observing
          </p>
        </div>
      </section>
      <section className="certications">
        <h1>Achievements</h1>
        <CertificateItems />
      </section>
    </>
  );
}

export default Home;
