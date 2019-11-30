import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <p>
        <small>
          <a href="https://github.com/ALFM126/weather-app-react">
            Open Source Code
          </a>{" "}
          by ALFM126
        </small>
      </p>
    </div>
  );
}

export default App;
