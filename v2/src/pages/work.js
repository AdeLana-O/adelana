import React from "react";

import Seo from "../components/Seo";
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
      <Seo seo pageDescription={description} pageTitle={title} />
      <div className="container">
        <h1>Hello World</h1>
      </div>
    </Layout>
  );
};

export default Work;
