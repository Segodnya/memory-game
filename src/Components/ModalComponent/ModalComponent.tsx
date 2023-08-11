import React from "react";
import { ModalComponentsProps } from "../../types";
import "./ModalComponent.css";

export function ModalComponent({ message, gameRestart }: ModalComponentsProps) {
  return (
    <div className="modal">
      <div className="modal__content">
        {message.split("\n").map((m) => (
          <p>{m}</p>
        ))}
        <button onClick={gameRestart} className="modal__button">
          Сыграть еще
        </button>
      </div>
    </div>
  );
}
