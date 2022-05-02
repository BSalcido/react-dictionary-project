import React, { useState } from "react";
import SearchResults from "./SearchResults";
import Photos from "./Photos";
import "./Dictionary.css";
import "./Sections.css";
import { WordResult, Photo } from "../types";
import { getDictionaryApi, getPexelsApi } from "../api/api";

function Dictionary() {
  const [word, setWord] = useState("");
  const [searchResults, setSearchResults] = useState<WordResult | null>(null);
  const [photos, setPhotos] = useState<Photo[] | null>(null);

  const [errorDictionary, setErrorDictionary] = useState(false);
  const errorMessageDictionary = (
    <section className="mt-5 py-5">
      <div className="Dictionary__errorMessage">
        Sorry!
        <br />
        We couldn't find definitions for the word you were looking for.
      </div>
      <div className="Dictionary__errorResolution">
        You can try the search again at later time or head to the web instead.
      </div>
    </section>
  );
  const contentDictionary = errorDictionary ? (
    errorMessageDictionary
  ) : (
    <SearchResults results={searchResults} />
  );

  async function callDictionaryApi() {
    try {
      const wordResults = await getDictionaryApi(word);
      setSearchResults(wordResults[0]);
    } catch (error) {
      setErrorDictionary(true);
    }
  }

  async function callPexelsApi() {
    try {
      const photos = await getPexelsApi(word);
      setPhotos(photos);
    } catch (error) {}
  }

  function search(event: React.FormEvent<HTMLFormElement>) {
    setErrorDictionary(false);
    event.preventDefault();
    callDictionaryApi();
    callPexelsApi();
  }

  function handleWordInput(event: React.ChangeEvent<HTMLInputElement>) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="Dictionary__section">
        <h1 className="Dictionary-title">What word do you want to look up?</h1>
        <div className="Dictionary__search-engine">
          <form className="Dictionary__search-form row" onSubmit={search}>
            <div className="col-9 col-sm-8 col-md-9 col-lg-10 col-xl-11">
              <input
                type="search"
                className="form-control Dictionary__form-control"
                placeholder="Search word"
                onChange={handleWordInput}
              ></input>
            </div>
            <div className="col-1 col-sm-4 col-md-3 col-lg-2 col-xl-1 d-flex">
              <input
                className="Dictionary__btn btn"
                type="submit"
                value="Search"
              />
            </div>
            <div className="form-text">
              i.e. sunrise, happy, music, color...
            </div>
          </form>
        </div>
      </section>
      {contentDictionary}
      {!errorDictionary && <Photos photos={photos} />}
    </div>
  );
}

export default Dictionary;
