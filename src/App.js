import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [breed, setBreed] = useState("");
  const url = `https://dog.ceo/api/breed/${breed}/images`;

  const getData = async () => {
    const results = await axios.get(url);
    console.log(results.data.message);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="app">
      <h1>Dogs Image Search</h1>
      <div className="search__box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search__box-input"
            placeholder="Search for a breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
          <input type="submit" className="search__box-button" value="Search" />
        </form>
      </div>
      <div className="dog__box"></div>
    </div>
  );
}

export default App;
