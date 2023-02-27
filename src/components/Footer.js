import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icon">
        <a href="https://www.linkedin.com/in/rachel-bach/" alt="linkedIn">
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
        <a href="https://github.com/ngoc-bach">
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
        <a href="mailto: thanhngcobach0904@gmail.com">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>
      </div>
      <p style={{ textAlign: "center", color: "grey" }}>
        &copy; {new Date().getFullYear()} by Rachel. Build with React
      </p>
    </footer>
  );
};

export default Footer;
