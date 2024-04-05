import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Search() {
  const [loading, setLoading] = useState(false);
  const { query } = useParams()
  const [searchQuery, setSearchQuery] = useState(query);
  const navigate = useNavigate();

  function searchTerm(event) {
    if (searchQuery) {
      setLoading(true);
      setTimeout(() => {
        navigate(`/movies/${searchQuery}`);
        setLoading(false)
      }, 1000);
    }
  }
  return (
    <div className="input__container">
      <input
        type="text"
        className="input"
        placeholder="Enter Keywords..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyDown={(event) => event.key === "Enter" && searchTerm(searchQuery)}
      />
      {loading ? (
        <button className="input__button">
          <FontAwesomeIcon icon="fa-solid fa-spinner" />
        </button>
      ) : (
        <>
          <button
            className="input__button"
            onClick={() => searchTerm(searchQuery)}
          >
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </>
      )}
    </div>
  );
}

export default Search;
