import React from "react";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Tools from "../components/Tools";

const Home = () => (
  <>
    <Seo seo />
    <Hero />
    <Work />
    <About />
    <Tools />
  </>
);

export default Home;
