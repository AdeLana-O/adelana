import React from "react";
import Layout from "./src/components/Layout";
import ThemeProvider from "./src/components/ThemeProvider";
import "./src/styles/main.scss";
import "./src/styles/darkTheme.scss";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);
