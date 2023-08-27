import React from "react";
import { ModalComponentsProps } from "../../types";
import "./ModalComponent.css";

export function ModalComponent({
  children,
  gameRestart,
}: ModalComponentsProps) {
  return (
    <div className="modal">
      <div className="modal__content">
        {children.split("\n").map((m, i) => (
          <p key={i}>{m}</p>
        ))}
        <button onClick={gameRestart} className="modal__button">
          Сыграть еще
        </button>
      </div>
    </div>
  );
}
