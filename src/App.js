import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
      <footer>
        <small>
          This project was coded by ALFM126 and is{" "}
          <a href="https://github.com/ALFM126/weather-app-react">
            open-sourced
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
