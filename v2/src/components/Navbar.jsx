import React from "react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import { siteConfig } from "../utils/siteConfig";
import "../styles/components/Navbar.scss";

const Navbar = () => {
  const { pathname } = useLocation();
  const index = pathname.indexOf("/", 1);
  let pathStr;

  if (index !== -1) {
    pathStr = pathname.substr(0, index);
  }

  return (
    <nav id="nav">
      <ol className="nav__menu">
        {siteConfig.navLinks.map(({ name, link }) => {
          let className;

          if ((!pathname && link === "/") || pathname === link || pathStr === link) {
            className = "nav__link nav__link--active";
          } else {
            className = "nav__link";
          }

          return (
            <li key={name} className="nav__item">
              <Link to={link} className={className}>
                {name}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Navbar;
