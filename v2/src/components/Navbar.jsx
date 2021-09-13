import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import { config } from "../utils/config";

const { navLinks } = config;

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav id="navbar">
      <ol className="navbar__menu">
        {navLinks.map(({ name, link }) => (
          <li key={name} className="navbar__item">
            <Link
              to={link}
              className={
                pathname === link
                  ? "navbar__link navbar__link--active"
                  : "navbar__link"
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
