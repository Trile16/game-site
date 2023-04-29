import React from "react";
import { Card } from "./";
import blackjackPreview from "./assets/blackjack-image-preview.png";

function AllGames(props) {
  return (
    <div className="game-display">
      <Card
        name="Blackjack"
        image={blackjackPreview}
        link="https://tri-le-blackjack.netlify.app"
      />

      <Card
        name="Roulette"
        image={blackjackPreview}
        link="https://tri-le-blackjack.netlify.app"
      />

      <Card
        name="Video Poker"
        image={blackjackPreview}
        link="https://tri-le-blackjack.netlify.app"
      />
    </div>
  );
}

export default AllGames;
