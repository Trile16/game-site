import React from "react";
import "./Footer.css";
import ghLogo from "./assets/GitHub-Logo.png";
import lLogo from "./assets/LinkedIn-Logo.png";

function Footer(props) {
  return (
    <div id="footer">
      <a href="https://github.com/Trile16">
        <img className="icon" src={ghLogo} alt="GitHub Logo" />
      </a>
      <a href="https://www.linkedin.com/in/trile16/">
        <img className="icon" src={lLogo} alt="LinkedIn Logo" />
      </a>
    </div>
  );
}

export default Footer;
