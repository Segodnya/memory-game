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
  return (
    <div className={`${steps >= avaliableSteps ? "modal_active" : "modal"}`}>
      <div className="modal-content">
        <h2>{message}</h2>
      </div>
    </div>
  );
};
