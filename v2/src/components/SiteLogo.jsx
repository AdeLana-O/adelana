import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/components/SiteLogo.scss";

const SiteLogo = () => (
  <div className="site-logo">
    <div className="site-logo__img">
      <Link to="/">
        <StaticImage
          src="../images/logo.png"
          alt="Adelana Onafuwa website logo"
          placeholder="tracedSVG"
        />
      </Link>
    </div>
  </div>
);

export default SiteLogo;
