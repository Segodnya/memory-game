import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/Cards";
import "./App.css";

export function App() {
  const [steps, setSteps] = useState(0);
  const avaliableSteps = 40;
  const [modalVisible, setModalVisible] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    if (steps === 0) {
      setModalVisible({ status: true, message: "Попытки закончились!" });
    }
  }, [steps]);

  return (
    <div className="App">
      <h1 className="App__title">Memory Game - React</h1>
      <div className="App__board">
        <div>Сделано ходов {steps}</div>
        <Cards
          steps={steps}
          setSteps={setSteps}
          avaliableSteps={avaliableSteps}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
        <div>Осталось попыток {avaliableSteps - steps}</div>
      </div>
    </div>
  );
}
