import React from "react";
export default function Meaning(props) {
  return (
   
    (
      <div className="Meaning mb-4" >
        <h5> {props.allMeanings.partOfSpeech} </h5> 
        <p className="mt-1">
          {" "}
          {props.allMeanings.definitions.map(function (eachDefinition, index) {
            return (
              <div key={index}>
                <p>
                  {eachDefinition.definition}
                  <br />
                  <em className="text-secondary">{eachDefinition.example} </em>{" "}
                </p>
              </div>
            );
          })}
        </p>
      </div>
    )
  );
}
