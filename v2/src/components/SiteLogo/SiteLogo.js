import React from "react";
import { Link } from "gatsby";

const SiteLogo = () => {
  return (
    <div className="site-logo">
      <Link to="/">
        <img src="logo.svg" alt="Website logo" className="site-logo__image" />
      </Link>
    </div>
  );
};

export default SiteLogo;
