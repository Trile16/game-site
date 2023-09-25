import React from "react";
import Card from "./Card";
import snake from "./assets/snake-image-preview.png";
import ticTacToePreview from "./assets/tic-tac-toe-image-preview.png";
import simonPreview from "./assets/simon-preview.png";

function Classic(props) {
  return (
    <div className="game-display">
      <Card
        name="Tic-Tac-Toe"
        image={ticTacToePreview}
        link="https://tri-le-tic-tac-toe.netlify.app/"
      />

      <Card
        name="Snake"
        image={snake}
        link="https://tri-le-snake.netlify.app/"
        target="_blank"
      />

      <Card
        name="Simon"
        image={simonPreview}
        link="https://tri-le-simon.netlify.app"
      />
    </div>
  );
}

export default Classic;
