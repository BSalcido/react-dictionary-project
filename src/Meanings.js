import React from "react";
import "./Meanings.css";
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

function Meanings(props) {
  return (
    <div className="Meanings">
      <h3 className="Meanings__part">{props.meanings.partOfSpeech}</h3>
      {props.meanings.definitions.map((definition, index) => {
        return (
          <div className="Meanings__definitions px-3" key={index}>
            <p className="Meanings__definition">
              <span className="me-3"> {`${index + 1}.`}</span>
              {definition.definition}
            </p>
            <Example example={definition.example} />
          </div>
        );
      })}

      <Synonyms synonyms={props.meanings.synonyms} />
      <Antonyms antonyms={props.meanings.antonyms} />
    </div>
  );
}

export default Meanings;
