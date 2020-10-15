import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";

import { config } from "../../utils/config";

const NavLinks = ({ className }) => {
  const { pathname } = useLocation();
  const { navLinks } = config;
  const isNavbar = className === "navbar";

  return (
    <>
      {isNavbar ? (
        <ol className={`${className}__menu`}>
          {navLinks.map(navLink => (
            <li key={navLink.name} className={`${className}__item`}>
              <Link
                to={navLink.link}
                className={
                  pathname === navLink.link
                    ? `${className}__link ${className}__link--active`
                    : `${className}__link`
                }
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <ul className={`${className}__quick-links-menu`}>
          {navLinks.map(navLink => (
            <li key={navLink.name} className={`${className}__quick-link-item`}>
              <Link to={navLink.link} className={`${className}__quick-link`}>
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

NavLinks.propTypes = {
  className: PropTypes.string.isRequired,
}

export default NavLinks;
