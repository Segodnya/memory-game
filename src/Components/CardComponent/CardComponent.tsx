import React from "react";
import classNames from "classnames";
import { CardComponentProps } from "../../types";
import imgBack from "../../images/logo.svg";
import "./CardComponent.css";

export function CardComponent({
  card,
  isFlipped,
  isVisible,
  index,
  flipCard,
}: CardComponentProps) {
  return (
    <div
      onClick={() => flipCard(index)}
      className={classNames({
        card: !isFlipped,
        "flipped card_block": isFlipped,
        card_hidden: !isVisible,
      })}
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
