import imgFirebase from "./images/firebase.png";
import imgNginx from "./images/nginx.png";
import imgNode from "./images/node.png";
import imgReact from "./images/react.png";
import imgRedux from "./images/redux.png";
import imgTs from "./images/ts.png";
import imgWebpack from "./images/webpack.png";
import imgWs from "./images/ws.png";
import { CardType } from "./types";

export const INITIAL_CARDS: CardType[] = [
  { id: 1, img: imgFirebase, stat: "" },
  { id: 2, img: imgNginx, stat: "" },
  { id: 3, img: imgNode, stat: "" },
  { id: 4, img: imgReact, stat: "" },
  { id: 5, img: imgRedux, stat: "" },
  { id: 6, img: imgTs, stat: "" },
  { id: 7, img: imgWebpack, stat: "" },
  { id: 8, img: imgWs, stat: "" },
];

export function shuffleDeck(deck: CardType[]): CardType[] {
  return deck.sort(() => Math.random() - 0.5);
}

export function changeDeclension(moves: number): string {
  let word: string;
  switch (moves) {
    case 22 || 23 || 24 || 32 || 33 || 34:
      word = "ХОДА";
      return word;
    case 21 || 31:
      word = "ХОД";
      return word;
    default:
      word = "ХОДОВ";
      return word;
  }
}
