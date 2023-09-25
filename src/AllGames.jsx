import React from "react";
import { Card } from "./";
import blackjackPreview from "./assets/blackjack-image-preview.png";
import snake from "./assets/snake-image-preview.png";
import ticTacToePreview from "./assets/tic-tac-toe-image-preview.png";
import whackAMolePreview from "./assets/whack-a-mole-image-preview.png";
import shieldHeroPreview from "./assets/shield-hero-preview.png";
import simonPreview from "./assets/simon-preview.png";

function AllGames(props) {
  return (
    <div className="game-display">
      <Card
        name="Blackjack"
        image={blackjackPreview}
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
        name="Whack-a-mole"
        image={whackAMolePreview}
        link="https://tri-le-whack-a-mole.netlify.app/"
      />

      <Card
        name="Shield Hero"
        image={shieldHeroPreview}
        link="https://tri-le-shield-hero.netlify.app"
      />

      <Card
        name="Simon"
        image={simonPreview}
        link="https://tri-le-simon.netlify.app"
      />
    </div>
  );
}

export default AllGames;
