import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP is Running!!!");

  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(!allowToggle);
  };

  const toggle = allowToggle ? 'true' : 'false'
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Button onClick={allowToggleHandler}> Allow Toggle: {toggle} </Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
      {showParagraph && <p>This is new!</p>}
    </div>
  );
}

export default App;
