import styled from "styled-components";

import Gameboard from "../Game-board/Gameboard";
import { useState } from "react";

const Gameheader = (props) => {
  const [activePlayer, setActivePlayer] = useState(0);
  const [displayForGame, setDispayForGame] = useState("none");

  const startGame = () => {
    if (props.data[0].name.length > 0 && props.data[1].name.length > 0) {
      setDispayForGame("block");
    } else {
      alert("Please set a Custom Name");
    }
  };

  const switchPlayer = () => {
    if(activePlayer == 0) {
     setActivePlayer(1)
    } else {
     setActivePlayer(0)
    }
}
  return (
    <div style={{ textAlign: "center", margin: "30px 0" }}>
      <button onClick={startGame}>Start Game</button>
      <div style={{ display: displayForGame }}>
        <div
          style={{
            width: "80%",
            textAlign: "center",
            backgroundColor: "blueviolet",
            margin: " 20px auto",
            display: "none",
          }}
        >
          <h1 style={{ color: "white" }}>
            You won
            <span style={{ color: "rgb(70,0,99)" }}>
              {props.data[activePlayer].name}
            </span>
          </h1>
        </div>
        <div>
          <p>
            It's Your Turn,
            <span style={{ color: "blueviolet" }}>{props.data[activePlayer].name}</span>
          </p>
        </div>
        <Gameboard switchPlayer={switchPlayer} playerData = {props.data} activePlayer={activePlayer}></Gameboard>
      </div>
    </div>
  );
};

export default Gameheader;
