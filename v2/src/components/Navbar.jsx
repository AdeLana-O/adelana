import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import { config } from "../utils/config";

const { navLinks } = config;

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav id="nav">
      <ol className="nav__menu">
        {navLinks.map(({ name, link }) => (
          <li key={name} className="nav__item">
            <Link
              to={link}
              className={
                pathname === link ? "nav__link nav__link--active" : "nav__link"
              }
            >
              {name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Navbar;
