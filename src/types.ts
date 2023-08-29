export interface CardType {
  id: number;
  img: string;
  stat: string;
}

export interface CardComponentProps {
  card: CardType;
  index: number;
  isFlipped: boolean;
  isVisible: boolean;
  flipCard: (index: number) => void;
}

export interface ModalComponentsProps {
  children: string;
  gameRestart: () => void;
}
