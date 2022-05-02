import React from "react";
import "./App.css";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
        <Footer />
      </div>
    </div>
  );
}

export default App;
