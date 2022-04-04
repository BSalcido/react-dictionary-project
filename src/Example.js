import React from "react";
import "./Meanings.css";

function Example(props) {
  if (props.example.length) {
    return (
      <div className="Meanings__example fst-italic">"{props.example}"</div>
    );
  } else {
    return null;
  }
}

export default Example;
