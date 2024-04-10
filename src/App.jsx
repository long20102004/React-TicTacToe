import CoreConcept from "./components/CoreConcept";
import Example1 from "./Example1";
import ReactLogo from "./assets/react.svg";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <CoreConcept logo={ReactLogo}></CoreConcept>
      <Example1></Example1>
    </Fragment>
  );
}

export default App;
