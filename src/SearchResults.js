import React from "react";
import "./SearchResults.css";
import Meanings from "./Meanings";

function SearchResults(props) {
  if (props.results) {
    return (
      <div className="SearchResults">
        <h2 className="SearchResults__word">{props.results.word}</h2>
        <em className="SearchResults__phonetic">{props.results.phonetic}</em>
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
