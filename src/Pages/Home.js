import React from "react";
import "../Styles/home.css";
import Typewriter from "typewriter-effect";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

function Home() {
  return (
    <>
      <section className="home">
        <div className="introduction">
          <h1 className="name">Hi ,
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["I m Abdul Rafay", "I m a Software Engineer", "I m a FullStack Developer"],
              }}
            />
          </h1>

          <p className="discribtion">
            A software developer with a passion for learning and creating.
          </p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/rafayhere" target="_blank">
            <LinkedInIcon />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=khanrafay358@gmail.com"
            target="_blank"
          >
            <EmailIcon />
          </a>
          <a href="https://github.com/meetrafay" target="_blank">
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
        <div className="box1">
          <h3>Crash Course on Python</h3>
          <div className="log">
            <GoogleIcon />
          </div>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/YHFHRQ9FFLMH"
            target="_blank"
          >
            Click here to see the certificate
          </a>
        </div>
        <div className="box1">
          <h3>Programming with JavaScript</h3>
          <div className="log">
            <GoogleIcon />
          </div>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/2TDNRYJXV34B"
            target="_blank"
          >
            Click here to see the certificate
          </a>
        </div>
        <div className="box1">
          <h3>Front-End Development</h3>
          <div className="log">
            <GoogleIcon />
          </div>
          <a
            href="https://www.coursera.org/account/accomplishments/verify/U5A5GJRB54BX "
            target="_blank"
          >
            Click here to see the certificate
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
