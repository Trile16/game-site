import React from "react";
import "./Footer.css";
import ghLogo from "./assets/GitHub-Logo.png";
import lLogo from "./assets/LinkedIn-Logo.png";

function Footer(props) {
  return (<>
    <div id="footer">
      <div id="footer-icons">
        <a href="https://github.com/Trile16" target="_blank">
          <img className="icon" src={ghLogo} alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/in/trile16/" target="_blank">
          <img className="icon" src={lLogo} alt="LinkedIn Logo" />
        </a>
      </div>
      <p>&copy; 2025 by Tri Le.</p>
    </div>
  </>
  );
}

export default Footer;
