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
      <section id="not-found-page">
        <div className="container">
          <div className="not-found-page__container">
            <h1>
              <span>404</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span>Page Not Found</span>
            </h1>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
