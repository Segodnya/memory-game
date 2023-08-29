import React, { useEffect, useState, useRef } from "react";
import { CardType } from "../../types";
import { CardComponent } from "../CardComponent/CardComponent";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import { INITIAL_DECK, changeDeclension, shuffleDeck } from "../../utils";
import "./App.css";

export function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const timeoutId = useRef<number | null>(null);
  const TOTAL_ATTEMPTS = 40;
  const TOTAL_PAIRS = 8;

  useEffect(() => {
    setCards(shuffleDeck(INITIAL_DECK));
  }, []);

  const flipCard = (index: number): void => {
    window.clearTimeout(Number(timeoutId.current));
    if (TOTAL_ATTEMPTS - moves === 0 || matched.length === TOTAL_PAIRS) return;

    const updatedOpenCards =
      openCards.length > 1
        ? [...openCards.slice(-1), index]
        : [...openCards, index];

    setOpenCards(updatedOpenCards);
  };

  useEffect(() => {
    if (openCards.length < 2) return;

    const [firstMatched, secondMatched] = openCards.map(
      (cardIndex) => cards[cardIndex]
    );

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched((matched) => [...matched, firstMatched.id]);
    }

    if (openCards.length === 2) {
      setMoves((moves) => moves + 1);
      timeoutId.current = window.setTimeout(() => setOpenCards([]), 1500);
    }
  }, [openCards, cards, clearTimeout, timeoutId]);

  const gameRestart = () => {
    setOpenCards([]);
    setMatched([]);
    setMoves(0);
    setCards(shuffleDeck(INITIAL_DECK));
  };

  return (
    <div className="App">
      <h1 className="App__title">Memory</h1>

      <main className="App__board">
        <div className="App__text">
          Сделано ходов <span className="App__span">{moves}</span>
        </div>

        <div className="App__cards">
          {cards.map((card, index) => (
            <CardComponent
              key={index}
              card={card}
              index={index}
              isFlipped={openCards.includes(index)}
              isVisible={!matched.includes(card.id)}
              flipCard={flipCard}
            />
          ))}
        </div>
        <div className="App__text">
          Осталось попыток{" "}
          <span className="App__span">{TOTAL_ATTEMPTS - moves}</span>
        </div>
      </main>
      {(TOTAL_ATTEMPTS - moves === 0 || matched.length === TOTAL_PAIRS) && (
        <ModalComponent gameRestart={gameRestart}>
          {(() => {
            let word = changeDeclension(moves);
            if (TOTAL_ATTEMPTS - moves === 0) {
              return `Увы, вы проиграли\nУ вас кончились ходы`;
            } else if (matched.length === TOTAL_PAIRS) {
              return `Ура, вы выиграли\nЭто заняло ${moves} ${word}`;
            } else {
              return "";
            }
          })()}
        </ModalComponent>
      )}
    </div>
  );
}
