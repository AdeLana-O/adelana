import React from "react";

import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";

const Home = () => (
  <Layout>
    <Seo seo />
    <Hero />
    <Work />
    <About />
  </Layout>
);

export default Home;
