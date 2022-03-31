import React from "react";
import "./Dictionary.css";

function Dictionary() {
  return (
    <div className="Dictionary">
      <div className="Dictionary__search-engine">
        <form className="Dictionary__search-form row">
          <div className="col-md-9 col-lg-10 col-xl-11">
            <input
              type="text"
              className="form-control"
              placeholder="What word do you want to look up?"
            ></input>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-1 d-flex justify-content-center">
            <button className="btn Dictionary__btn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Dictionary;
