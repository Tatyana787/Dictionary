import React, { useState } from "react";
import Result from "./Result";
import "./dictionary.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Photos from "./Photos";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(respons) {
    setResult(respons.data[0]);
    let pixelsApiKey = `563492ad6f917000010000012389b197e0904eb7956023e8af62057a`;
    let pixelsApiUrl = `https://api.pexels.com/v1/search?query=${respons.data[0].word}&per_page=9`;
    axios
      .get(pixelsApiUrl, {
        headers: { Authorization: `Bearer ${pixelsApiKey}` },
      })
      .then(handlePixelsResponse);
  }

  function handlePixelsResponse(respons) {
    setPhotos(respons.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWordsChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary-header">
      <div className="Dictionary px-4">
        <Form onSubmit={search} className="">
          <InputGroup onSubmit={search}>
            <Form.Control
              onChange={handleKeyWordsChange}
              type="text"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button
              className="btn btn-info text-light"
              type="submit"
              variant="outline-secondary"
              id="button-addon2"
            >
              Search
            </Button>
          </InputGroup>
        </Form>

        <div className="mt-4">
          <Result description={result} />
          <Photos allPhotos={photos} />
        </div>
      </div>
    </div>
  );
}
