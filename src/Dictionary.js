import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./Dictionary.css";
import "./Sections.css";

function Dictionary() {
  const [word, setWord] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  function handleApiResponse(response) {
    setSearchResults(response.data[0]);
  }

  function callApi(url) {
    axios.get(url).then(handleApiResponse);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    callApi(apiUrl);
  }

  function handleWordInput(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="Dictionary__section">
        <h1 className="Dictionary-title">What word do you want to look up?</h1>
        <div className="Dictionary__search-engine">
          <form className="Dictionary__search-form row" onSubmit={search}>
            <div className="col-sm-8 col-md-9 col-lg-10 col-xl-11">
              <input
                type="search"
                className="form-control Dictionary__form-control"
                placeholder="Search word"
                onChange={handleWordInput}
              ></input>
            </div>
            <div className="col-sm-4 col-md-3 col-lg-2 col-xl-1 d-flex justify-content-start">
              <input
                className="Dictionary__btn btn"
                type="submit"
                value="Search"
              />
            </div>{" "}
            <div className="form-text">
              Suggested words: sunrise, happy, music, color...
            </div>
          </form>
        </div>
      </section>
      <SearchResults results={searchResults} />
    </div>
  );
}

export default Dictionary;
