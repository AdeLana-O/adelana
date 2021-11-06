import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { siteConfig } from "../utils/siteConfig";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo
        pageDescription={siteConfig.pageMeta["not found"].description}
        pageTitle={siteConfig.pageMeta["not found"].title}
      />
      <div className="container">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
