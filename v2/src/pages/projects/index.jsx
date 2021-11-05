import React, { useState } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import { config } from "../../utils/config";
import ProjectsHeader from "../../components/ProjectsHeader";
import ProjectsTab from "../../components/ProjectsTab";
import ProjectsGrid from "../../components/ProjectsGrid";

const { pageMeta } = config;

const Projects = ({ data }) => {
  const [projectType, setProjectType] = useState("project");

  return (
    <Layout>
      <Seo
        seo
        pageDescription={pageMeta.projects.description}
        pageTitle={pageMeta.projects.title}
      />
      <ProjectsHeader />
      <ProjectsTab type={projectType} setProjectType={setProjectType} />
      <ProjectsGrid projects={data.allProjectsJson.edges} />
    </Layout>
  );
};

export const ProjectsQuery = graphql``;

export default Projects;
