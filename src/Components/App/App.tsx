import React from "react";
import "./App.css";
import imgFirebase from "../../images/firebase.svg";
import imgNginx from "../../images/nginx.svg";
import imgNode from "../../images/node.svg";
import imgReact from "../../images/react.svg";
import imgRedux from "../../images/redux.svg";
import imgTs from "../../images/ts.svg";
import imgWebpack from "../../images/webpack.svg";
import imgWs from "../../images/ws.svg";
import imgBack from "../../images/logo.svg";

export const INITIAL_CARDS: Card[] = [
  { id: 1, img: imgFirebase, stat: "" },
  { id: 2, img: imgNginx, stat: "" },
  { id: 3, img: imgNode, stat: "" },
  { id: 4, img: imgReact, stat: "" },
  { id: 5, img: imgRedux, stat: "" },
  { id: 6, img: imgTs, stat: "" },
  { id: 7, img: imgWebpack, stat: "" },
  { id: 8, img: imgWs, stat: "" },
];

interface Card {
  id: number;
  img: string;
  stat: string;
}

const deck: Card[] = [...INITIAL_CARDS, ...INITIAL_CARDS];

export function App() {
  const [arrayCards, setArrayCards] = React.useState<Card[]>([]);
  const [openCards, setOpenCards] = React.useState<number[]>([]);
  const [matched, setMatched] = React.useState<number[]>([]);
  const [attempts, setAttempts] = React.useState<number>(40);
  const [moves, setMoves] = React.useState<number>(0);

  React.useEffect(() => {
    setArrayCards(deck.sort(() => Math.random() - 0.5));
  }, []);

  const flipCard = (index: number): void => {
    if (openCards.length > 1) return;
    else setOpenCards((openCard) => [...openCard, index]);
  };

  React.useEffect(() => {
    if (openCards.length < 2) return;

    const firstMatched = arrayCards[openCards[0]];
    const secondMatched = arrayCards[openCards[1]];
    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openCards.length === 2) {
      setMoves(moves + 1);
      setAttempts(attempts - 1);
      setTimeout(() => setOpenCards([]), 1500);
    }
  }, [openCards]);

  const gameRestart = () => {
    setOpenCards([]);
    setMatched([]);
    setAttempts(40);
    setMoves(0);
    setArrayCards(deck.sort(() => Math.random() - 0.5));
  };

  return (
    <div className="App">
      <h1 className="App__title">Memory</h1>

      <main className="App__board">
        <div className="App__text">
          Сделано ходов <span className="App__span">{moves}</span>
        </div>

        <div className="App__cards">
          {arrayCards.map((card, index) => {
            let isFlipped = false;
            let isVisible = true;
            if (openCards.includes(index)) isFlipped = true;
            if (matched.includes(card.id)) {
              isFlipped = true;
              isVisible = false;
            }

            return (
              <div
                key={index}
                onClick={() => flipCard(index)}
                className={`  ${!isFlipped ? "card" : "flipped card--block"}
                           ${!isVisible ? "card--hidden" : ""}`}
              >
                <div className="card-front ">
                  <img src={card.img} width="100" alt="card-front" />
                </div>
                <div className="card-back ">
                  <img src={imgBack} width="100" alt="card-back" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="App__text">
          Осталось попыток <span className="App__span">{attempts}</span>
        </div>
      </main>
      {attempts === 0 ? (
        <div className="modal">
          <div className="modal-content">
            <p>Увы, вы проиграли</p>
            <p>У вас кончились ходы</p>
          </div>
          <button onClick={() => gameRestart()} className="modal__button">
            Сыграть еще
          </button>
        </div>
      ) : null}

      {matched.length === 8 ? (
        <div className="modal">
          <div className="modal-content">
            <p>Ура, вы выйграли</p>
            <p>{`Это заняло ${moves} ходов`}</p>
          </div>
          <button onClick={() => gameRestart()} className="modal__button">
            Сыграть еще
          </button>
        </div>
      ) : null}
    </div>
  );
}
