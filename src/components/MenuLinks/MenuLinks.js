import React from "react";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql, Link } from "gatsby";

const MenuLinks = ({ className }) => {
  const { pathname } = useLocation();
  const isNavbar = className === "navbar";
  const {
    site: {
      siteMetadata: { menuLinks },
    },
  } = useStaticQuery(
    graphql`
      query menuLinks {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  );

  return (
    <>
      {isNavbar ? (
        <ol className={`${className}__menu`}>
          {menuLinks.map(menuLink => (
            <li key={menuLink.name} className={`${className}__item`}>
              <Link
                to={menuLink.link}
                className={
                  pathname === menuLink.link
                    ? `${className}__link ${className}__link--active`
                    : `${className}__link`
                }
              >
                {menuLink.name}
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <ul className={`${className}__quick-links__menu`}>
          {menuLinks.map(menuLink => (
            <li key={menuLink.name} className={`${className}__quick-link__item`}>
              <Link to={menuLink.link} className={`${className}__quick-link`}>
                {menuLink.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuLinks;
