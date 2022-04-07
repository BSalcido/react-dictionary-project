import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import Photos from "./Photos";
import "./Dictionary.css";
import "./Sections.css";

function Dictionary() {
  const [word, setWord] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryApiResponse(response) {
    setSearchResults(response.data[0]);
  }

  function handlePexelsApiResponse(response) {
    setPhotos(response.data.photos);
    console.log(response);
  }

  function callDictionaryApi(url) {
    axios.get(url).then(handleDictionaryApiResponse);
  }

  function callPexelsApi(url, key) {
    axios
      .get(url, { headers: { Authorization: `Bearer ${key}` } })
      .then(handlePexelsApiResponse);
  }

  function search(event) {
    event.preventDefault();
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    callDictionaryApi(dictionaryApiUrl);

    const pexelsApiKey =
      "563492ad6f91700001000001e600859e320a4bc694188231ff1ec654";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=12`;
    console.log(pexelsApiUrl);
    callPexelsApi(pexelsApiUrl, pexelsApiKey);
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
      <Photos photos={photos} />
    </div>
  );
}

export default Dictionary;
