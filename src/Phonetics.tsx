import React from "react";
import "./Phonetics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {
  phonetics: {
    audio: string;
    text: string;
  };
};

const Phonetics = ({ phonetics }: Props) => {
  if (phonetics.audio && phonetics.text) {
    return (
      <div className="Phonetics">
        <a
          className="Phonetics__audio-link pe-3"
          href={phonetics.audio}
          target={"_blank"}
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faPlayCircle} />
        </a>
        {phonetics.text}
      </div>
    );
  } else {
    return null;
  }
};

export default Phonetics;
