import React from "react";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";

const Home = () => (
  <>
    <Seo seo />
    <Hero />
    <Work />
    <About />
  </>
);

export default Home;
