import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Nav() {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  
  return (
    <header>
      <section>
        <div className="row">
          <nav>
            <div className="logo">
              <h1>Movie Finder</h1>
            </div>
            <div className="nav__links">
              <Link to="/" className="nav__link">
                Home
              </Link>
              <Link to="/movies" className="nav__link">
                Find a movie
              </Link>
              <button
                onClick={() =>
                  (window.location.href = "mailto:andrewkhomoutov@hotmail.com")
                }
                className="btn1"
              >
                Contact
              </button>
            </div>
            <button className="menu__button" onClick={openMenu}>
              <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
            <div className="menu__backdrop">
              <button
                className="menu__button menu__button--close"
                onClick={closeMenu}
              >
                <FontAwesomeIcon icon="fa-solid fa-times" />
              </button>
              <ul className="menu__links">
                <li className="menu__list">
                  <Link className="menu__link" to="/" onClick={closeMenu}>
                    Home
                  </Link>
                </li>
                <li className="menu__list">
                  <Link to="/movies" onClick={closeMenu} className="menu__link">
                    Find a Movie
                  </Link>
                </li>
                <li className="menu__list">
                  <Link
                    className="menu__link"
                    to={() =>
                      (window.location.href =
                        "mailto:andrewkhomoutov@hotmail.com")
                    }
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Nav;
