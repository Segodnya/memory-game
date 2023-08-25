import React, { useEffect, useState } from "react";
import { CardType } from "../../types";
import { CardComponent } from "../CardComponent/CardComponent";
import { ModalComponent } from "../ModalComponent/ModalComponent";
import { INITIAL_DECK, changeDeclension, shuffleDeck } from "../../utils";
import "./App.css";

export function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [openCards, setOpenCards] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const TOTAL_ATTEMPTS = 40;

  useEffect(() => {
    setCards(shuffleDeck(INITIAL_DECK));
  }, []);

  const flipCard = (index: number): void => {
    if (TOTAL_ATTEMPTS - moves === 0 || matched.length === 8) return;

    if (openCards.length > 1) {
      clearTimeout(Number(timeoutId));
      setOpenCards([]);
      setOpenCards((openCard) => [...openCard, index]);
    } else {
      setOpenCards((openCard) => [...openCard, index]);
    }
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
      const id = setTimeout(() => setOpenCards([]), 1500);
      setTimeoutId(id);
    }
  }, [openCards, cards, clearTimeout, setTimeoutId]);

  useEffect(() => {
    let word = changeDeclension(moves);
    TOTAL_ATTEMPTS - moves === 0 &&
      setMessage(`Увы, вы проиграли\nУ вас кончились ходы`);
    matched.length === 8 &&
      setMessage(`Ура, вы выиграли\nЭто заняло ${moves} ${word}`);
  }, [matched, moves]);

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
              openCards={openCards}
              matched={matched}
              flipCard={flipCard}
            />
          ))}
        </div>
        <div className="App__text">
          Осталось попыток{" "}
          <span className="App__span">{TOTAL_ATTEMPTS - moves}</span>
        </div>
      </main>
      {(TOTAL_ATTEMPTS - moves === 0 || matched.length === 8) && (
        <ModalComponent message={message} gameRestart={gameRestart} />
      )}
    </div>
  );
}
