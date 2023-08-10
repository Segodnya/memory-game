import React from "react";

interface MessageModalProps {
  message: string;
}

const MessageModal: React.FC<MessageModalProps> = ({ message }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{message}</h2>
      </div>
    </div>
  );
};

export default MessageModal;
