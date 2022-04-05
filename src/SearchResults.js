import React from "react";
import "./SearchResults.css";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Sections.css";

function SearchResults(props) {
  if (props.results) {
    console.log(props.results);

    return (
      <div className="SearchResults">
        <section className="SearchResults__section-word">
          <h2 className="SearchResults__word">{props.results.word}</h2>
          <em className="SearchResults__phonetic">{props.results.phonetic}</em>
          <div className="SearchResults__audios mt-4">
            {props.results.phonetics.map((phonetic, index) => {
              return (
                <div className="SearchResults__audio-phonetics" key={index}>
                  <Phonetics phonetics={phonetic} />
                </div>
              );
            })}
          </div>
        </section>

        {props.results.meanings.map((meaning, index) => {
          return (
            <section className="SearchResults__section-meaning">
              <div className="SearchResults__meanings" key={index}>
                <Meanings meanings={meaning} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

export default SearchResults;
