import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Search from "../components/ui/Search";

function Home() {
  return (
    <div>
      <section>
        <div className="row">
          <div className="container home__container">
            <h1 className="title">Find your favourite movies and TV shows!</h1>
            <h3 className="sub-title">
              Search movies & shows with{" "}
              <span className="red">Movie Finder</span>
            </h3>
          </div>
          <Search />
        </div>
        <div className="row">
          <div className="movie__wrapper"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
