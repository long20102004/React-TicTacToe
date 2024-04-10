import React, { useState } from "react";
export default function CoreConcept(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={props.logo} className="logo" alt="Vite logo" />
        </a>
        <h1>Long đẹp zai</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}
