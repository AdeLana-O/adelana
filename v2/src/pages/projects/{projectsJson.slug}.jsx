import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithub, FaLink, FaLongArrowAltLeft } from "react-icons/fa";
import Seo from "../../components/Seo";

const ProjectPage = ({ data }) => {
  const image = getImage(data.projectsJson.image);

  return (
    <>
      <Seo
        seo
        pageDescription={data.projectsJson.metaDescription}
        pageTitle={data.projectsJson.metaTitle}
      />
      <section id="project-page">
        <div className="container">
          <div className="project-page__container">
            <h1>{data.projectsJson.name}</h1>
            <div className="project-page__image">
              <GatsbyImage
                image={image}
                alt={`Screenshot of ${data.projectsJson.metaDescription}`}
              />
            </div>
            <div className="project-page__links">
              <div className="project-page__links-wrapper">
                <a
                  href={data.projectsJson.live}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaLink />
                  &nbsp;&nbsp; Live
                </a>
              </div>
              {data.projectsJson.source && (
                <div className="project-page__links-wrapper">
                  <a
                    href={data.projectsJson.source}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FaGithub />
                    &nbsp;&nbsp; Source
                  </a>
                </div>
              )}
            </div>
            <div className="project-page__content">
              {data.projectsJson.content.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
            <div className="project-page__features">
              <h2>Features </h2>
              <ul className="project-page__features__menu">
                {data.projectsJson.features.map((feature, index) => (
                  <li className="project-page__features__item" key={index}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="project-page__footer">
              <Link to="/projects">
                <FaLongArrowAltLeft />
                &nbsp;&nbsp; Back to projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const query = graphql`
  query ProjectPage($id: String) {
    projectsJson(id: { eq: $id }) {
      name
      live
      source
      content
      features
      metaDescription
      metaTitle
      image {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

export default ProjectPage;
