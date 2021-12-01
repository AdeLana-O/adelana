import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "../context";

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const changeTheme = e => {
      e.matches ? setTheme("dark") : setTheme("light");
    };

    changeTheme(mediaQuery);

    mediaQuery.addEventListener("change", changeTheme);

    return () => {
      mediaQuery.removeEventListener("change", changeTheme);
    };
  }, []);

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={{ theme, themeToggler }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
