import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Movie({ movie, query }) {
  const navigate = useNavigate();

  return (
    <div className="movie" key={movie.imdbID}>
      <div className="movie__img">
        <img src={movie.Poster} alt=""></img>
        <div className="movie__content">
          <h1>{movie.Title}</h1>
          <h1>{movie.Year}</h1>
          <p>
            <a onClick={() => navigate(`/movie/${movie.imdbID}`)}>MORE INFO</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
