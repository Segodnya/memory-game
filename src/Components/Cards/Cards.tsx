import React, { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import "./Cards.css";
import imgFirebase from "../../images/firebase.svg";
import imgNginx from "../../images/nginx.svg";
import imgNode from "../../images/node.svg";
import imgReact from "../../images/react.svg";
import imgRedux from "../../images/redux.svg";
import imgTs from "../../images/ts.svg";
import imgWebpack from "../../images/webpack.svg";
import imgWs from "../../images/ws.svg";
import { MessageModal } from "../MessageModal/MessageModal";

interface CardsProps {
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
  setModalVisible: React.Dispatch<
    React.SetStateAction<{ status: boolean; message: string }>
  >;
  avaliableSteps: number;
  modalVisible: {
    status: boolean;
    message: string;
  };
}

interface Item {
  id: number;
  img: string;
  stat: string;
}

export function Cards({
  steps,
  setSteps,
  avaliableSteps,
  modalVisible,
  setModalVisible,
}: CardsProps) {
  const [items, setItems] = useState<Item[]>(
    [
      { id: 1, img: imgFirebase, stat: "" },
      { id: 1, img: imgFirebase, stat: "" },
      { id: 2, img: imgNginx, stat: "" },
      { id: 2, img: imgNginx, stat: "" },
      { id: 3, img: imgNode, stat: "" },
      { id: 3, img: imgNode, stat: "" },
      { id: 4, img: imgReact, stat: "" },
      { id: 4, img: imgReact, stat: "" },
      { id: 5, img: imgRedux, stat: "" },
      { id: 5, img: imgRedux, stat: "" },
      { id: 6, img: imgTs, stat: "" },
      { id: 6, img: imgTs, stat: "" },
      { id: 7, img: imgWebpack, stat: "" },
      { id: 7, img: imgWebpack, stat: "" },
      { id: 8, img: imgWs, stat: "" },
      { id: 8, img: imgWs, stat: "" },
    ].sort(() => Math.random() - 0.5)
  );

  const [prev, setPrev] = useState<number>(-1);
  const [pairsCollected, setPairsCollected] = useState<number>(0);

  function check(current: number) {
    if (items[current].id === items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      setPairsCollected(pairsCollected + 1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }

  function handleClick(id: number) {
    setSteps(steps + 1);
    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
    }
  }

  useEffect(() => {
    if (pairsCollected === 8) {
      setModalVisible({ status: true, message: "Ты - Победитель!" });
    }
  }, [pairsCollected]);

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card key={index} item={item} id={index} handleClick={handleClick} />
      ))}
      <MessageModal
        steps={steps}
        avaliableSteps={avaliableSteps}
        message={modalVisible.message}
      />
    </div>
  );
}
