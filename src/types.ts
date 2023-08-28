export interface CardType {
  id: number;
  img: string;
  stat: string;
}

export interface CardComponentProps {
  card: CardType;
  index: number;
  openCards: number[];
  matched: number[];
  flipCard: (index: number) => void;
}

export interface ModalComponentsProps {
  children: string;
  gameRestart: () => void;
}
