import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import { config } from "../../utils/config";
import ProjectsHeader from "../../components/ProjectsHeader";

const { pageMeta } = config;

const Projects = () => (
  <Layout>
    <Seo
      seo
      pageDescription={pageMeta.projects.description}
      pageTitle={pageMeta.projects.title}
    />
    <ProjectsHeader />
  </Layout>
);

export default Projects;
