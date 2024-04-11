import { useState } from "react";
import "./Board.css";
export default function Board({
  symbol,
  changeSymbol,
  setLog,
  selectedSquare,
  setSelectedSquare,
}) {
  const boardList = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [gameBoard, setGameBoard] = useState(boardList);
  const [gameOver, setGameOver] = useState(false);
  function checkWin(gameBoard) {
    for (let i = 0; i < 3; i++) {
      if (
        gameBoard[i][0] &&
        gameBoard[i][0] === gameBoard[i][1] &&
        gameBoard[i][0] === gameBoard[i][2]
      )
        return gameBoard[i][0];
    }
    for (let i = 0; i < 3; i++) {
      if (
        gameBoard[0][i] &&
        gameBoard[0][i] === gameBoard[1][i] &&
        gameBoard[0][i] === gameBoard[2][i]
      )
        return gameBoard[0][i];
    }
    if (
      gameBoard[0][0] &&
      gameBoard[0][0] === gameBoard[1][1] &&
      gameBoard[0][0] === gameBoard[2][2]
    ) {
      return gameBoard[0][0];
    }
    if (
      gameBoard[0][2] &&
      gameBoard[0][2] === gameBoard[1][1] &&
      gameBoard[0][2] === gameBoard[2][0]
    ) {
      return gameBoard[0][2];
    }
    return null;
  }
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
      const winner = checkWin(updatedBoard);
      if (!gameOver) {
        if (winner) {
          console.log(10);
          alert(winner + " won!");
          setGameOver(true);
        }
      }
      return updatedBoard;
    });

    changeSymbol();
    setLog((prevLog) => [
      ...prevLog,
      <li>
        {symbol} just choosed {rowIndex}, {colIndex};
      </li>,
    ]);
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
