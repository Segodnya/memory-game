import imgFirebase from "./images/firebase.svg";
import imgNginx from "./images/nginx.svg";
import imgNode from "./images/node.svg";
import imgReact from "./images/react.svg";
import imgRedux from "./images/redux.svg";
import imgTs from "./images/ts.svg";
import imgWebpack from "./images/webpack.svg";
import imgWs from "./images/ws.svg";
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
