import React from "react";
import "./Phonetics.css"
export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.allPhonetics.audio} target="_blank" rel="noreferrer">
        Listen {" "}
      </a>
      {props.allPhonetics.text}{" "}
    </div>
  );
}
