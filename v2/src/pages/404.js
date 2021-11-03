import React from "react";

import SEO from "../components/Seo";
import Layout from "../components/Layout";

import { config } from "../utils/config";

const NotFoundPage = () => {
  const {
    pageMeta: {
      "not found": { title, description },
    },
  } = config;

  return (
    <Layout>
      <SEO pageDescription={description} pageTitle={title} />
      <div className="container">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
