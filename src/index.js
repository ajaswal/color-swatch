import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getColors } from "./api";
import ColorSwatch from "./components/ColorSwatch";
import styled from "styled-components";

function App() {
  const [colors, setColors] = useState([]);
  const [isRefreshed, setIsRefreshed] = useState(false);

  useEffect(() => {
    getColors().then(setColors);
    return () => {
      setIsRefreshed(false);
    };
  }, [isRefreshed]);

  const handleRefresh = () => {
    setIsRefreshed(true);
  };
  return (
    <div>
      <StyledButton onClick={(e) => handleRefresh()}>More Colors</StyledButton>
      <ColorSwatch colors={colors} />
    </div>
  );
}

const StyledButton = styled.button`
  position: absolute;
  height: 50px;
  left: 46%;
  top: 40%;
`;

export default App;

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
