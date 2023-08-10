import React from "react";
import "./Card.css";

interface Item {
  id: number;
  img: string;
  stat: string;
}

interface CardProps {
  item: Item;
  id: number;
  handleClick: (id: number) => void;
}

export function Card({ item, id, handleClick }: CardProps) {
  const itemClass = item.stat ? " active " + item.stat : " untouched ";

  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
      <img className="card__image" src={item.img} alt="" />
    </div>
  );
}
