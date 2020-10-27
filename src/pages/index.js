import React from "react";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Work from "../components/Work";

const Home = () => (
  <Layout>
    <SEO seo />
    <Hero />
    <Work />
  </Layout>
);

export default Home;
