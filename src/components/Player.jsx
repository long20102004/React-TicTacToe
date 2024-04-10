import { useState } from "react";
import "./Player.css";
export default function Player({ ...props }) {
  const [name, setName] = useState(props.name);
  const [content, setContent] = useState("Edit");
  const [isEditing, setEditing] = useState(false);
  function click() {
    setEditing(!isEditing);
    if (content === "Save") setContent("Edit");
    else setContent("Save");
  }
  let nameValue = <span className="player-name">{name} </span>;
  if (isEditing) {
    nameValue = (
      <textarea
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></textarea>
    );
  }
  let cssClass = "player";
  if (props.isActive) cssClass += " " + "player-active";
  else cssClass = "player";
  return (
    <>
      <div className={cssClass}>
        {nameValue}
        <span className="player-symbol">{props.symbol}</span>
        <button className="edit" onClick={click}>
          {content}
        </button>
      </div>
    </>
  );
}
