import React from "react";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Hero from "../components/Hero/Hero";

const Home = () => (
  <Layout>
    <SEO canonical />
    <Hero />
  </Layout>
);

export default Home;
