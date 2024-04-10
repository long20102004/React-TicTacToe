import { useState } from "react";
import TabButton from "./components/TabButton";
import { Example } from "./components/Example";
export default function Example1() {
  const [content, setContent] = useState("components");
  function onClick() {
    setContent();
  }
  let tabContent = <p>Nothing here</p>;
  if (content) {
    tabContent = Example.map((item, index) => (
      <TabButton
        key={index}
        onClick={onClick}
        title={item.title}
        description={item.description}
      ></TabButton>
    ));
  }
  return <>{tabContent}</>;
}
