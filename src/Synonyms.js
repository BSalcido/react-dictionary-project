import React from "react";
import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        <div className="Synonyms__head">SYNONYMS</div>
        <ul className="Synonyms__list">
          {props.synonyms.map((synonym, index) => {
            return (
              <li className="Synonyms__item d-inline-flex" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;
