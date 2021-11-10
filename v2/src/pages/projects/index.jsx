import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import { siteConfig } from "../../utils/siteConfig";

const Projects = ({ data }) => {
  const renderProjects = data.allProjectsJson.edges.map(project => {
    const { id, image, name, slug } = project.node;
    const imageData = getImage(image);

    return (
      <div className="projects-grid__item" key={id}>
        <Link to={`/projects/${slug}`}>
          <div className="projects-grid__image">
            <GatsbyImage alt={name} image={imageData} />
          </div>
          <div className="projects-grid__title">
            <p>{name}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <Layout>
      <Seo
        seo
        pageDescription={siteConfig.pageMeta.projects.description}
        pageTitle={siteConfig.pageMeta.projects.title}
      />
      <section id="projects-header">
        <div className="container">
          <div className="projects-header__container">
            <h1>Projects</h1>
            <div className="projects-header__details">
              <p>Below is a catalogue of projects I have worked on</p>
            </div>
          </div>
        </div>
      </section>
      <section id="projects-body">
        <div className="container">
          <div className="projects-body__container">
            <div className="projects-grid">{renderProjects}</div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query ProjectsImages {
    allProjectsJson {
      edges {
        node {
          id
          name
          slug
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
