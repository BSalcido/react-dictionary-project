import React, { useState } from "react";
import "./Dictionary.css";

function Dictionary() {
  const [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching...${word}`);
  }

  function handleWordInput(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <div className="Dictionary__search-engine">
        <form className="Dictionary__search-form row" onSubmit={search}>
          <div className="col-md-9 col-lg-10 col-xl-11">
            <input
              type="text"
              className="form-control"
              placeholder="What word do you want to look up?"
              onChange={handleWordInput}
            ></input>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-1 d-flex justify-content-center">
            <input
              className="Dictionary__btn btn"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dictionary;
