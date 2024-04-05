import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState();

  async function fetchMovieInfo() {
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=fbb2e191&i=${id}`
    );
    setMovie(data);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return (
    <>
      {loading ? (
        <div className="big__spinner">
        <FontAwesomeIcon icon="fa-solid fa-spinner" />  
        </div>
      ) : (
        <section>
          <div className="row">
            <div className="container movie__info--container">
              <div className="movie__img--wrapper">
                <h1>{movie.Title}</h1>
                <img src={movie.Poster} alt="" />
              </div>
              <div className="movie__info--wrapper">
                <h3>
                  <span className="red">Released: </span>
                  {movie.Released}
                </h3>
                <h3>
                  <span className="red">Actors: </span>
                  {movie.Actors}
                </h3>
                <h3>
                  <span className="red">Genre: </span>
                  {movie.Genre}
                </h3>
                <h3>
                  <span className="red">Director: </span>
                  {movie.Director}
                </h3>
                <h3>
                  <span className="red">Writer: </span>
                  {movie.Writer}
                </h3>
                <h3>
                  <span className="red">Language: </span>
                  {movie.Language}
                </h3>
                <h3>
                  <span className="red">Plot: </span>
                  {movie.Plot}
                </h3>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default MovieInfo;
