import React from "react";
import "./Meanings.css";

function Meanings(props) {
  return (
    <div className="Meanings">
      <h3 className="Meanings__part">{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map((definition, index) => {
        return (
          <div className="Meanings__definitions" key={index}>
            <p className="Meanings__definition">
              {`${index + 1}. `}
              {definition.definition}
            </p>
            <div className="Meanings__example fst-italic">
              {definition.example}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Meanings;
