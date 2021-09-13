import React from "react";
import { Link } from "gatsby";

const SiteLogo = () => {
  return (
    <div className="site-logo">
      <Link to="/">
        <picture>
          <img
            src="logo.svg"
            alt="Adelana Onafuwa website logo"
            className="site-logo__image"
            loading="lazy"
          />
        </picture>
      </Link>
    </div>
  );
};

export default SiteLogo;
