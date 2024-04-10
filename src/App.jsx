import { useState } from "react";
import GameBoard from "./components/GameBoard";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GameBoard></GameBoard>
    </>
  );
}

export default App;
