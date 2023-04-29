import React from "react";
import Card from "./Card";
import blackjackPreview from "./assets/blackjack-image-preview.png";

function Action(props) {
  return (
    <div className="game-display">
      <Card
        name="Whack-a-mole"
        image={blackjackPreview}
        link="https://tri-le-blackjack.netlify.app"
      />
    </div>
  );
}

export default Action;
