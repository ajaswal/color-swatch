import React from "react";
import ReactDOM from "react-dom";

function App() {
  return <div>This is an app</div>;
}

export default App;

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
