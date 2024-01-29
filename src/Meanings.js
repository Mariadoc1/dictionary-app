import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      {props.meanings.definition.map(function (props, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {props.meanings.definition}
              <br />
              <strong>Example:</strong> {props.meanings.example}
              <br />
              <Synonyms synonyms={props.meanings.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
