import React from "react";
import "./Phonetics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

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
          <FontAwesomeIcon icon={faPlayCircle} />
        </a>{" "}
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}

export default Phonetics;
