import React from "react";
import Card from "./Card";
import construction from "./assets/construction.png";

function Classic(props) {
  return (
    <div className="game-display">
      <Card
        name="Tic-Tac-Toe"
        image={construction}
        link="https://tri-le-blackjack.netlify.app"
      />

      <Card
        name="Snake"
        image={construction}
        link="https://tri-le-blackjack.netlify.app"
      />

      <Card
        name="Connect Four"
        image={construction}
        link="https://tri-le-blackjack.netlify.app"
      />
    </div>
  );
}

export default Classic;
