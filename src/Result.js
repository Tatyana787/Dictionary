import React from "react";
import Meaning from "./Meaning";
export default function Result(props) {

  if (props.description) {
    return (
      <div className="Result">
        <h1 className="text-info">{props.description.word} </h1>
        {props.description.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              {" "}
              <Meaning allMeanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
