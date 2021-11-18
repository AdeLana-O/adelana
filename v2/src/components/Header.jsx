import React from "react";
import SiteLogo from "./SiteLogo";
import Navbar from "./Navbar";
import ThemeButton from "./ThemeButton";

const Header = () => (
  <header id="header">
    <div className="container">
      <div className="header__container">
        <SiteLogo />
        <Navbar />
        <ThemeButton />
      </div>
    </div>
  </header>
);

export default Header;
