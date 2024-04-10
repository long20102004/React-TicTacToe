import Player from "./Player";
import "./GameBoard.css";
import Board from "./Board";
import { useState } from "react";
export default function GameBoard() {
  const firstSymbol = "X";
  const [symbol, setSymbol] = useState(firstSymbol);
  function changeSymbol() {
    setSymbol((prevSymbol) => {
      if (prevSymbol === "X") return "O";
      else return "X";
    });
  }
  return (
    <>
      <div className="board-bound">
        <div className="player-container">
          <Player
            name="PLAYER 1"
            symbol="X"
            isActive={symbol === "X" ? true : false}
          ></Player>
          <Player
            name="PLAYER 2"
            symbol="O"
            isActive={symbol === "O" ? true : false}
          ></Player>
        </div>
        <Board changeSymbol={changeSymbol} symbol={symbol}></Board>
      </div>
    </>
  );
}
