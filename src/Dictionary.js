import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null); 

function search(event) {
    setKeyword(event.target.value);
  }

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

 function handleImagesResponse(response) {
    // setResults(response.data);
    console.log(response);
    setPhotos(response.data.photos);
  } 

  function handleSearch(event) {
    event.preventDefault();

    let apiKey = `7a6tfo3aa33dcf22944a8db00a0bf65c`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let imagesApiKey = `487f36oead7740fff43e3a5t4ccd7b4f`;
    let imagesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imagesApiKey}`;
    axios.get(imagesApiUrl).then(handleImagesResponse);
  }

  
  return (
    <div className="Dictionary">
      <div className="Dictionary-search text-center">
       
        <form onSubmit={handleSearch}>
        <h1>Would you like to search for a definition?</h1>
          <input
            type="search"
            autoFocus={true}
            placeholder=" Look up a word"
            onChange={search}
          />
          <div className="hint">
            suggested words: authentic, amazing, peace, etc...
          </div>
        </form>
      </div>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}