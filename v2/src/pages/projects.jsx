import React from "react";
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import { config } from "../utils/config";

const { pageMeta } = config;

const Projects = () => (
  <Layout>
    <Seo
      seo
      pageDescription={pageMeta.projects.description}
      pageTitle={pageMeta.projects.title}
    />
  </Layout>
);

export default Projects;
