import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import Swatch from "./components/Swatch";
import { getColors, getExtendedColors } from "./api";
import ErrorBoundary from "./components/ErrorBoundary";

import "./App.css";

function App() {
  const [colors, setColors] = useState([]);
  // Default fetching is usually false
  // Setting it to true to fetch the first time
  // without adding another useEffect.
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      getColors().then(setColors);
      // getExtendedColors().then(setColors);
    }
    setFetching(false);
  }, [fetching]);

  const handleRefresh = () => setFetching(true);

  return (
    <>
      <ErrorBoundary>
        <StyledButton onClick={handleRefresh}>More Colors</StyledButton>
        <Swatch colors={colors} />
      </ErrorBoundary>
    </>
  );
}

const StyledButton = styled.button`
  position: absolute;
  height: 50px;
  left: 50%;
  top: 45%;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 3px;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export default App;

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
