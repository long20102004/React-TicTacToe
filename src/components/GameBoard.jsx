import Player from "./Player";
import "./GameBoard.css";
import Board from "./Board";
import { useState } from "react";
import Log from "./Log";
export default function GameBoard() {
  const firstSymbol = "X";
  const [symbol, setSymbol] = useState(firstSymbol);
  const [log, setLog] = useState([]);
  const initBoardState = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  const [boardState, setBoardState] = useState(initBoardState);
  // const [turn, setTurn] = [firstSymbol, boardState];
  function changeSymbol() {
    setSymbol((prevSymbol) => {
      if (prevSymbol === "X") return "O";
      return "X";
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
        <Board
          changeSymbol={changeSymbol}
          symbol={symbol}
          setLog={setLog}
          selectedSquare={boardState}
          setSelectedSquare={setBoardState}
        ></Board>
      </div>
      <Log turn={log}></Log>
    </>
  );
}
