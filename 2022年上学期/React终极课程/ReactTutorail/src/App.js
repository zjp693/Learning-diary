// src/App.js
import { useState } from "react";
import Modal from "./Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const appStyles = { width: "60%", height: 400, transform: "translate(0,0)" };
  return (
    <div style={appStyles}>
      <button onClick={() => setIsOpen(!isOpen)}>open modal</button>
      {isOpen ? <Modal /> : null}
    </div>
  );
}

export default App;