import React, { useState } from 'react';
import Board from './Board';
import MessageModal from './MessageModal';

const Game: React.FC = () => {
  const [isGameOver, setIsGameOver] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matchedCards, setMatchedCards] = useState(0);

  const handleGameOver = (message: string) => {
    setIsGameOver(true);
    alert(message);
  };

  const handleMatchedCard = () => {
    setMatchedCards((prevMatchedCards) => prevMatchedCards + 1);
  };

  const handleMove = () => {
    setMoves((prevMoves) => prevMoves + 1);
  };

  return (
    <div className="game">
      {isGameOver && <MessageModal message={Congratulations! You won in ${moves} moves!} />}
      <Board onGameOver={handleGameOver} onMatchedCard={handleMatchedCard} onMove={handleMove} />
    </div>
  );
};

export default Game;
