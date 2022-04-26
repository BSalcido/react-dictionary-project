import React from "react";
import "./Antonyms.css";

type Props = { antonyms: string[] };

const Antonyms = ({ antonyms }: Props) => {
  if (antonyms.length) {
    return (
      <div className="Antonyms">
        <div className="Antonyms__head">ANTONYMS</div>
        <ul className="Antonyms__list">
          {antonyms.map((synonym, index) => {
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
};

export default Antonyms;
