import React from "react";
import "./SearchResults.css";
import Meanings from "./Meanings";

function SearchResults(props) {
  if (props.results) {
    console.log(props);
    return (
      <div className="SearchResults">
        <h2>{props.results.word}</h2>
        <em>{props.results.phonetic}</em>
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
