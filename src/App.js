import axios from "axios";
import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [breed, setBreed] = useState("");
  const [dogs, setDogs] = useState([]);
  const url = `https://dog.ceo/api/breed/${breed}/images`;

  const getData = async () => {
    try {
      const results = await axios.get(url);
      const sliced = results.data.message.slice(0, 20);
      setDogs(sliced);
      console.log(results.data.message);
    } catch (error) {
      alert("The specific breed doesn't exist");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setBreed("");
  };
  return (
    <div className="app">
      <h1>Dogs Breed Search</h1>
      <div className="search__box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="search__box-input"
            placeholder="Search for a breed"
            value={breed.toLowerCase()}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
          />
          <input
            type="submit"
            disabled={breed === ""}
            className="search__box-button"
            value="Search"
          />
        </form>
      </div>
      <div className="dog__box">
        {dogs.length === 0 && (
          <p>
            Example: hound, doberman, affenpinscher,
            african,bouvier,elkhound,husky , mexicanhairless , schipperke ,
            terrier ,vizsla , waterdog , wolfhound
          </p>
        )}
        {dogs.map((dog) => (
          <div className="img__container" id={uuidv4()}>
            <img src={dog} alt="dog" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
