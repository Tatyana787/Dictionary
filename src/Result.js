import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
export default function Result(props) {
  if (props.description) {
    return (
      <div className="Result">
        <section>
          <h1 className="text-info">{props.description.word} </h1>

          {props.description.phonetics.map(function (phonetic, index) {
            return (
            
                <Phonetics allPhonetics={phonetic} key={index}/>
           
            );
          })}
             </section>
        {props.description.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
        
             
                <Meaning allMeanings={meaning} />
        
            </section>
          );
        })}
   
      </div>
    );
  } else {
    return null;
  }
}
