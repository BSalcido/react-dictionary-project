import React from "react";
import "./Meanings.css";

type Props = { example: string };

const Example = ({ example }: Props) => {
  if (example) {
    return <div className="Meanings__example fst-italic">"{example}"</div>;
  } else {
    return null;
  }
};

export default Example;
