import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import WorkMobile from "./WorkMobile";
import WorkLarge from "./WorkLarge";

const Work = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.screen.width);

    const screenSize = () => {
      setWidth(window.screen.width);
    };

    window.addEventListener("resize", screenSize);

    return () => {
      window.removeEventListener("resize", screenSize);
    };
  }, []);

  const { allFile } = useStaticQuery(query);

  return (
    <section id="work">
      <div className="container">
        <div className="work__container">
          <div className="work__header">
            <h2>Featured Projects</h2>
            <p>Some of my featured projects and open source projects...</p>
          </div>
          <div className="work__slide__images">
            {width >= 768 ? (
              <WorkLarge images={allFile.edges} />
            ) : (
              <WorkMobile images={allFile.edges} />
            )}
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
