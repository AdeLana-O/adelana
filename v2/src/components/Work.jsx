import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import WorkMobile from "./WorkMobile";
import WorkLarge from "./WorkLarge";

const Work = () => {
  const { allFile } = useStaticQuery(query);

  const mobileImgs = allFile.edges.filter(file => {
    return file.node.name.includes("mobile");
  });

  return (
    <section id="work">
      <div className="container">
        <div className="work__container">
          <div className="work__header">
            <h2>Featured Projects</h2>
            <p>Some of my featured projects and open source projects...</p>
          </div>
          <div className="work__slides">
            <WorkMobile images={mobileImgs} />
            <WorkLarge images={allFile.edges} />
          </div>
          <div className="work__footer">
            <Link to="/work">View More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const query = graphql`
  query Slides {
    allFile(
      sort: { fields: name, order: ASC }
      filter: { dir: { regex: "/projects/" } }
    ) {
      edges {
        node {
          id
          name
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default Work;
