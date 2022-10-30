import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  return (
    <div className="Meaning mb-4">
      <h5> {props.allMeanings.partOfSpeech} </h5>
      <div className="mt-1">
        {" "}
        {props.allMeanings.definitions.map(function (eachDefinition, index) {
          return (
            <div key={index}>
              {" "}
              Definition: {eachDefinition.definition}
              <br />
              <em className="text-secondary">
                {" "}
                {eachDefinition.example}{" "}
              </em>{" "}
              <Synonyms synonyms={eachDefinition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
