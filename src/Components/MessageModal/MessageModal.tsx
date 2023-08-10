import React from "react";
import "./MessageModal.css";

interface MessageModalProps {
  message: string;
  steps: number;
  avaliableSteps: number;
}

export const MessageModal: React.FC<MessageModalProps> = ({
  avaliableSteps,
  steps,
  message,
}) => {
  const modalClass = steps >= avaliableSteps ? "modal_active" : "modal";

  return (
    <div className={modalClass}>
      <div className="modal-content">
        <h2>{message}</h2>
        <button className="modal__button">СЫГРАТЬ ЕЩЕ</button>
      </div>
    </div>
  );
};
