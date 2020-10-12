import React from "react";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql, Link } from "gatsby";

const Navbar = () => {
  const { pathname } = useLocation();
  const {
    site: {
      siteMetadata: { navLinks },
    },
  } = useStaticQuery(query);

  return (
    <nav id="navbar">
      <ol className="navbar__menu">
        {navLinks.map(navLink => (
          <li key={navLink.name} className="navbar__item">
            <Link
              to={navLink.link}
              className={`navbar__link ${
                pathname === navLink.link && "navbar__link--active"
              }`}
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

const query = graphql`
  query menuLinks {
    site {
      siteMetadata {
        navLinks {
          name
          link
        }
      }
    }
  }
`;

export default Navbar;
