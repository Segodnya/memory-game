import React, { useState } from "react";

interface CardProps {
  image: string;
  isMatched: boolean;
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  isMatched,
  isFlipped,
  onClick,
}) => {
  const handleClick = () => {
    if (!isFlipped && !isMatched) {
      onClick();
    }
  };

  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${
        isMatched ? "matched" : ""
      }`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src="images/card-back.jpg" alt="Card Back" />
        </div>
        <div className="card-back">
          <img src={image} alt="Card Image" />
        </div>
      </div>
    </div>
  );
};

export default Card;
