import React from "react";
import "./Meanings.css";

import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meanings.partOfSpeech}</h3>
      <div className="definition"> {props.meanings.definition}</div>
      <div className="example">{props.meanings.example}</div>
      <div className="Synonym">
        <Synonyms synonyms={props.meanings.synonyms} />
      </div>
    </div>
  );
}
