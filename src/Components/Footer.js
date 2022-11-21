import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../Styles/footer.css";

function Footer() {
  return (
    <footer className="footer-bar">
      <div className="socialMedia">
        <a href="https://github.com/meetrafay"  rel="noopener noreferrer" target="_blank">
          <GitHubIcon />
        </a>

        <a href="https://www.linkedin.com/in/rafayhere" rel="noopener noreferrer" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008885321646" rel="noopener noreferrer" target="_blank">
          
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com/meet_raffay/" rel="noopener noreferrer" target="_blank">
          <InstagramIcon />
        </a>
      </div>
      <p className="copyright">@2022 Rafay123.com</p>
    </footer>
  );
}

export default Footer;
