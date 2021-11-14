import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../../components/Seo";
import { siteConfig } from "../../utils/siteConfig";

const { pageMeta, projects } = siteConfig;

const Projects = ({ data }) => {
  const renderProjects = data.allProjectsJson.edges.map(project => {
    const { id, image, name, slug } = project.node;
    const imageData = getImage(image);

    return (
      <div className="projects-page-grid__item" key={id}>
        <Link to={`/projects/${slug}`}>
          <GatsbyImage alt={name} image={imageData} />
          <div className="projects-page-grid__title">
            <p>{name}</p>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <>
      <Seo
        seo
        pageDescription={pageMeta.projects.description}
        pageTitle={pageMeta.projects.title}
      />
      <section id="projects-page">
        <div className="container">
          <div className="projects-page__container">
            <div className="projects-page__details">
              <h1>{projects.header}</h1>
              <p>{projects.text}</p>
            </div>
            <div className="projects-page-grid">{renderProjects}</div>
          </div>
        </div>
      </section>
    </>
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
