import React from "react";
import "./App.css";
import { Header, GameDisplay } from "./index.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <GameDisplay />
    </>
  );
}

export default App;
