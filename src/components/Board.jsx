import { useState } from "react";
import "./Board.css";
export default function Board({ symbol, changeSymbol }) {
  const boardList = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const initialSelectedState = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  const [gameBoard, setGameBoard] = useState(initialSelectedState);
  const [selectedSquare, setSelectedSquare] = useState(initialSelectedState);
  function handleClick(rowIndex, colIndex) {
    if (selectedSquare[rowIndex][colIndex]) return;
    const updatedSelectedSquare = selectedSquare.map((row) => [...row]);
    updatedSelectedSquare[rowIndex][colIndex] = true;
    setSelectedSquare(updatedSelectedSquare);
    setGameBoard((prevGameBoard) => {
      const updatedBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = symbol;
      return updatedBoard;
    });
    changeSymbol();
  }
  return (
    <div className="board-container">
      {gameBoard.map((row, rowIndex) => (
        <div key={rowIndex} className="board-column">
          {row.map((playerSymbol, colIndex) => (
            <button
              key={colIndex}
              className="board"
              onClick={() => handleClick(rowIndex, colIndex)}
            >
              {playerSymbol}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
