import React from "react";
import "./Phonetics.css";

function Phonetics(props) {
  if (props.phonetics.audio) {
    console.log(props.phonetics);
    return (
      <div className="Phonetics">
        <a
          className="Phonetics__audio-link"
          href={props.phonetics.audio}
          target={"_blank"}
          rel="noreferrer"
        >
          Listen
        </a>{" "}
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}

export default Phonetics;
