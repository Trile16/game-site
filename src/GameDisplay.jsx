import React from "react";
import "./GameDisplay.css";
import { Routes, Route } from "react-router-dom";
import { AllGames, Casino, Action, Classic } from "./";

function GameDisplay(props) {
  return (
    <div id="main">
      <Routes>
        <Route path="/" element={<AllGames />} />
        <Route path="/casino" element={<Casino />} />
        <Route path="/action" element={<Action />} />
        <Route path="/classic" element={<Classic />} />
      </Routes>
    </div>
  );
}

export default GameDisplay;
