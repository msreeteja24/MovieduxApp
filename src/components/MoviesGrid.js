import React, { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("movies.json") //Here since we are in the same directory we are not writing the whole URL
      .then((response) => response.json()) //here we are converting the response to Json (later they will be available as Javascript objects)
      .then((data) => setMovies(data)); //Here we are assigning them to the data objects.
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movies.."
        value={searchTerm} //here we will give the state of Searchterm
        onChange={handleSearchChange} //whenever there is a change in the searchterm, the new state will be set in this function.  This will force the UI to get re rendered.
      ></input>
      <div className="movies-grid">
        {
          //Here the filteredMovie function is called and only the filtered movies are displayed.
        }
        {filteredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
