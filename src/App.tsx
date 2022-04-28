import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/brisa-salcido-0ba125186"
            target={"_blank"}
            rel="noreferrer"
          >
            Brisa Salcido
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/BSalcido/react-dictionary-project"
            target={"_blank"}
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}

export default App;
