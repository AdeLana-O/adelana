import React from "react";

import SEO from "../components/SEO";
import Layout from "../components/Layout";

import { config } from "../utils/config";

const Work = () => {
  const {
    pageMeta: {
      work: { title, description },
    },
  } = config;

  return (
    <Layout>
      <SEO seo pageDescription={description} pageTitle={title} />
      <div className="container">
        <h1>Hello World</h1>
      </div>
    </Layout>
  );
};

export default Work;
