import React, { useEffect, useState } from "react";
import { CardComponentProps } from "../../types";
import imgBack from "../../images/logo.svg";
import "./CardComponent.css";

export function CardComponent({
  card,
  index,
  openCards,
  matched,
  flipCard,
}: CardComponentProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsFlipped(openCards.includes(index));
    setIsVisible(!matched.includes(card.id));
  }, [openCards, matched, card.id, index]);

  return (
    <div
      onClick={() => flipCard(index)}
      className={`${!isFlipped ? "card" : "flipped card_block"} ${
        !isVisible ? "card_hidden" : ""
      }`}
    >
      <div className="card__front">
        <img className="card__image" src={card.img} alt="card__front" />
      </div>
      <div className="card__back">
        <img src={imgBack} alt="card__back" />
      </div>
    </div>
  );
}
