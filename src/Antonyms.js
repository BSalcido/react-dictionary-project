import React from "react";
import "./Antonyms.css";

function Antonyms(props) {
  if (props.antonyms.length) {
    return (
      <div className="Antonyms">
        <div className="Antonyms__head">ANTONYMS</div>
        <ul className="Antonyms__list">
          {props.antonyms.map((synonym, index) => {
            return (
              <li className="Antonyms__item d-inline-flex" key={index}>
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

export default Antonyms;
