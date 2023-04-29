import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar(props) {
  return (
    <>
      <span id="navbar">
        <Link to="/">All Games</Link>
        <Link to="/classic">Classic</Link>
        <Link to="/action">Action</Link>
        <Link to="/casino">Casino</Link>
      </span>
    </>
  );
}

export default NavBar;
