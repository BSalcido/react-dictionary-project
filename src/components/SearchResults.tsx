import React from "react";
import "./SearchResults.css";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";
import "./Sections.css";
import { WordResult } from "../types";

type Props = { results: WordResult | null };

const SearchResults = ({ results }: Props) => {
  if (results) {
    return (
      <div className="SearchResults">
        <section className="SearchResults__section-word-header">
          <h2 className="SearchResults__word">{results.word}</h2>
          <em className="SearchResults__phonetic">{results.phonetic}</em>
          <div className="SearchResults__audios">
            {results.phonetics.map((phonetic, index) => {
              return (
                <div className="SearchResults__audio-phonetics" key={index}>
                  <Phonetics phonetics={phonetic} />
                </div>
              );
            })}
          </div>
        </section>
        {results.meanings.map((meaning, index) => {
          return (
            <section className="SearchResults__section-meaning" key={index}>
              <div className="SearchResults__meanings">
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
};

export default SearchResults;
