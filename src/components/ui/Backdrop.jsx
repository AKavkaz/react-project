import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Backdrop() {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <div>
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
                (window.location.href = "mailto:andrewkhomoutov@hotmail.com")
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Backdrop;
