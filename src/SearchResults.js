import React from "react";
import "./SearchResults.css";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

function SearchResults(props) {
  if (props.results) {
    console.log(props.results);
    return (
      <div className="SearchResults">
        <h2 className="SearchResults__word">{props.results.word}</h2>
        <em className="SearchResults__phonetic">{props.results.phonetic}</em>
        <h3 className="SearchResults__audios">Listen pronunciation(s):</h3>
        {props.results.phonetics.map((phonetic, index) => {
          return (
            <div className="SearchResults__audio-phonetics" key={index}>
              <Phonetics phonetics={phonetic} />
            </div>
          );
        })}

        {props.results.meanings.map((meaning, index) => {
          return (
            <div className="SearchResults__meanings" key={index}>
              <Meanings meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default SearchResults;
