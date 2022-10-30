import React from "react";
import "./Phonetics.css"
export default function (props) {
  return (
    <div className="Phonetics">
      <a href={props.allPhonetics.audio} target="_blank">
        Listen {" "}
      </a>
      {props.allPhonetics.text}{" "}
    </div>
  );
}
