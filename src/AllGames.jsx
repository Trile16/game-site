import React from "react";
import { Card } from "./";
import blackjackPreview from "./assets/blackjack-image-preview.png";
import snake from "./assets/snake-image-preview.png";
import ticTacToePreview from "./assets/tic-tac-toe-image-preview.png";
import whackAMolePreview from "./assets/whack-a-mole-image-preview.png";
import construction from "./assets/construction.png";

function AllGames(props) {
  return (
    <div className="game-display">
      <Card
        name="Blackjack"
        image={blackjackPreview}
        link="https://tri-le-blackjack.netlify.app"
      />

      <Card
        name="Connect Four"
        image={construction}
        link="https://tri-le-blackjack.netlify.app"
      />

      <Card
        name="Roulette"
        image={construction}
        link="https://tri-le-blackjack.netlify.app"
      />

      <Card
        name="Snake"
        image={snake}
        link="https://tri-le-snake.netlify.app/"
      />

      <Card
        name="Tic-Tac-Toe"
        image={ticTacToePreview}
        link="https://tri-le-tic-tac-toe.netlify.app/"
      />

      <Card
        name="Video Poker"
        image={construction}
        link="https://tri-le-blackjack.netlify.app"
      />

      <Card
        name="Whack-a-mole"
        image={whackAMolePreview}
        link="https://tri-le-whack-a-mole.netlify.app/"
      />
    </div>
  );
}

export default AllGames;
