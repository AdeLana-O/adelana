import React from "react";
import PropTypes from "prop-types";

import Header from "../Header";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
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
