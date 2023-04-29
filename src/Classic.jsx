import React from "react";
import Card from "./Card";
import blackjackPreview from "./assets/blackjack-image-preview.png";

function Classic(props) {
  return (
    <div className="game-display">
      <Card
        name="Tic-Tac-Toe"
        image={blackjackPreview}
        link="https://tri-le-blackjack.netlify.app"
      />

      <Card
        name="Snake"
        image={blackjackPreview}
        link="https://tri-le-blackjack.netlify.app"
      />

      <Card
        name="Connect Four"
        image={blackjackPreview}
        link="https://tri-le-blackjack.netlify.app"
      />
    </div>
  );
}

export default Classic;
