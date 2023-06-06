import React from "react";
import Card from "./Card";
import whackAMolePreview from "./assets/whack-a-mole-image-preview.png";
import shieldHeroPreview from "./assets/shield-hero-preview.png";

function Action(props) {
  return (
    <div className="game-display">
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
    </div>
  );
}

export default Action;
