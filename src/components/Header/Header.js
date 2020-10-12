import React from "react";
import { Link } from "gatsby";

import Navbar from "../Navbar";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header__container">
          <div className="site-logo">
            <Link to="/">
              <img src="logo.svg" className="site-logo__image" alt="Website logo" />
            </Link>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
