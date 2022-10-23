import React, { useState } from "react";
import Result from "./Result";
import "./dictionary.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(respons) {
    // console.log(respons.data[0]);
    setResult(respons.data[0]);
  }

  function search(event) {
    event.preventDefault();
    console.log("123");
    alert(`Searching for ${keyword}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWordsChange(event) {
    setKeyword(event.target.value);
  }
  return (
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
      </div>
    </div>
  );
}
