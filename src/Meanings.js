import React from "react";

function Meanings(props) {
  console.log(props.meanings);
  return (
    <div className="Meanings">
      <h3 className="Meanings__part">{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map((definition, index) => {
        return (
          <div className="Meanings__definitions" key={index}>
            <p className="Meanings__definition">{definition.definition}</p>
            <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}

export default Meanings;
