import React from "react";
import Card from "./Card";
import construction from "./assets/construction.png";
import snake from "./assets/snake-image-preview.png";
import ticTacToePreview from "./assets/tic-tac-toe-image-preview.png";

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
    </div>
  );
}

export default Classic;
