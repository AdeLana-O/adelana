import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeContext } from "../context";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.documentElement.className =
      theme === "light" ? "light--mode" : "dark--mode";
  }, [theme]);

  return (
    <div id="site__wrapper">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
