import React from "react";
import Card from "./Card";
import blackjackPreview from "./assets/blackjack-image-preview.png";
import construction from "./assets/construction.png";

function Casino(props) {
  return (
    <div className="game-display">
      <Card
        name="Blackjack"
        image={blackjackPreview}
        link="https://tri-le-blackjack.netlify.app"
      />
    </div>
  );
}

export default Casino;
