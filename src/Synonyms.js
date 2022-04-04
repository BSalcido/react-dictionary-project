import React from "react";
import "./Synonyms.css";

function Synonyms(props) {
  if (props.synonyms.length) {
    return (
      <div className="Synonyms">
        Synonyms:
        <ul className="Synonyms__list ">
          {props.synonyms.map((synonym, index) => {
            return (
              <li className="Synonyms__item" key={index}>
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
