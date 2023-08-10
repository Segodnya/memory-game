import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import "./App.css";

export function App() {
  const [steps, setSteps] = useState(0);
  const avaliableSteps = 4;
  const [modalVisible, setModalVisible] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    if (steps === 0) {
      setModalVisible({
        status: true,
        message: "УВЫ, ВЫ ПРОИГРАЛИ У ВАС КОНЧИЛИСЬ ХОДЫ",
      });
    }
  }, [steps]);

  return (
    <div className="App">
      <h1 className="App__title">Memory</h1>
      <div className="App__board">
        <div className="App__text">
          Сделано ходов <span className="App__span">{steps}</span>
        </div>
        <Cards
          steps={steps}
          setSteps={setSteps}
          avaliableSteps={avaliableSteps}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <div className="App__text">
          Осталось попыток{" "}
          <span className="App__span">{avaliableSteps - steps}</span>
        </div>
      </div>
    </div>
  );
}
