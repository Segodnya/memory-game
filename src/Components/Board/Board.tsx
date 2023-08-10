import React, { useState, useEffect } from "react";
import { Card } from "./Card";

interface BoardProps {
  images: string[];
}

const Board: React.FC<BoardProps> = ({ images }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Создаем пары карт
    const pairs = images.concat(images);
    const shuffledCards = shuffleArray(
      pairs.map((image) => ({ image, isFlipped: false, isMatched: false }))
    );
    setCards(shuffledCards);
  }, []);

  const handleCardClick = (index: number) => {
    setCards((prevCards) =>
      prevCards.map((card, i) => {
        if (i === index) {
          return { ...card, isFlipped: true };
        }
        return card;
      })
    );
  };

  const shuffleArray = (array: any[]) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  return (
    <div className="board">
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          isMatched={card.isMatched}
          isFlipped={card.isFlipped}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
