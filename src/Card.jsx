import React from "react";
import "./Card.css";

function Card({ name, image, link }) {
  console.log(image);
  return (
    <div className="card">
      <a href={link} target="_blank">
        <img src={image} />
      </a>
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
