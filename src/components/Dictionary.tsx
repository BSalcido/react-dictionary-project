import React, { useState } from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import Photos from "./Photos";
import "./Dictionary.css";
import "./Sections.css";
import { DictionaryResponse, WordResult, PhotosResponse, Photo } from "../types";

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

  function handleDictionaryApiResponse(response: DictionaryResponse) {
    setSearchResults(response.data[0]);
  }

  function handlePexelsApiResponse(response: PhotosResponse) {
    setPhotos(response.data.photos);
  }

  function handleDictionaryApiError() {
    setErrorDictionary(true);
  }

  function callDictionaryApi(url: string) {
    axios
      .get(url)
      .then(handleDictionaryApiResponse)
      .catch(handleDictionaryApiError);
  }

  function callPexelsApi(url: string, key: string) {
    axios
      .get(url, { headers: { Authorization: `Bearer ${key}` } })
      .then(handlePexelsApiResponse);
  }

  function search(event: React.FormEvent<HTMLFormElement>) {
    setErrorDictionary(false);
    event.preventDefault();
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    callDictionaryApi(dictionaryApiUrl);

    const pexelsApiKey =
      "563492ad6f91700001000001e600859e320a4bc694188231ff1ec654";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=12`;
    callPexelsApi(pexelsApiUrl, pexelsApiKey);
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
            <div className="col-1 col-sm-4 col-md-3 col-lg-2 col-xl-1 d-flex justify-contentDictionary-start align-items-center">
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
