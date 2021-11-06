import React, { useState } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import ProjectsHeader from "../../components/ProjectsHeader";
import ProjectsTab from "../../components/ProjectsTab";
import ProjectsGrid from "../../components/ProjectsGrid";
import { siteConfig } from "../../utils/siteConfig";

const Projects = ({ data }) => {
  const [projectType, setProjectType] = useState("all");

  return (
    <Layout>
      <Seo
        seo
        pageDescription={siteConfig.pageMeta.projects.description}
        pageTitle={siteConfig.pageMeta.projects.title}
      />
      <ProjectsHeader />
      <section id="projects-body">
        <div className="container">
          <div className="projects-body__container">
            <ProjectsTab projectType={projectType} setProjectType={setProjectType} />
            <ProjectsGrid
              projects={data.allProjectsJson.edges}
              projectType={projectType}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const ProjectsQuery = graphql`
  query ProjectsImages {
    allProjectsJson {
      edges {
        node {
          id
          name
          slug
          type
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
        }
      }
    }
  }
`;

export default Projects;
