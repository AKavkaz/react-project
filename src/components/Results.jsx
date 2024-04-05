import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "./ui/Movie";

function Results({ searchTerm }) {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);

  async function fetchMovies() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=fbb2e191&s=${query}`
    );
    if (data.Search) {
        setMovies(data.Search);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <div className="row">
      <div className="results__container">
        <div>
          {query ? (
            <h2 className="title results__title">Results for "{query}":</h2>
          ) : (
            <h2>Enter a name to get started</h2>
          )}
        </div>
        <div className="movie__wrapper">
          {query ? (
            movies.map((movie) => <Movie movie={movie} key={movie.id} />)
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Results;
