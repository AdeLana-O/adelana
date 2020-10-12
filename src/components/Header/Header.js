import React from "react";

import Navbar from "../Navbar";
import SiteLogo from "../SiteLogo";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header__container">
          <SiteLogo />
          <Navbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
