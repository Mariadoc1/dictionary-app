import React, { useState } from "react";
import axios from "axios";

import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState("beach");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexelsResponse(response) {
    console.log(response);
  }

  function search() {
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "7odb1604cd5806418921397fa0t4e3ac";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "AAHw56hScoO1bbk8w3aPxMDGDjEJtJQwG9ZXpaw4ABkGArYItNR6O7qY";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorization: pexelsApiKey };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="formSection">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              placeholder="Enter a word..."
              onChange={handleKeywordChange}
              className="search"
            ></input>
          </form>
          <div className="hint">e.g. sunset, forest, book...</div>
        </div>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
