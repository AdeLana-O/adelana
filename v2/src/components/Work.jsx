import React, { useState, useRef, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Work = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const { allFile } = useStaticQuery(query);

  const mobileImgs = allFile.edges.filter(file => {
    return file.node.name.includes("mobile");
  });

  const imgIndexes = mobileImgs.length - 1;

  const imgTitle = mobileImgs[currentImage].node.name
    .replace(/\-mobile/, "")
    .replace("-", " ");

  const prevImage = useRef();
  const intervalId = useRef();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCurrentImage(state => (state === imgIndexes ? 0 : state + 1));
    }, 2000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [imgIndexes]);

  useEffect(() => {
    prevImage.current = currentImage;
  }, [currentImage]);

  const renderImages = mobileImgs.map((img, index) => {
    const { id, name, childImageSharp } = img.node;
    let className;

    if (index === currentImage) {
      className = "slide__image slide__active";
    } else if (prevImage.current === index) {
      className = "slide__image slide__prev";
    } else {
      className = "slide__image";
    }

    return (
      <div className={className} key={id}>
        <Img fluid={childImageSharp.fluid} alt={name} />
      </div>
    );
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
            <div className="work__imgs__container">
              <div className="mobile__device">
                <div className="slide__image__container">{renderImages}</div>
              </div>
              <div className="slide__image__title">
                <span>{imgTitle}</span>
              </div>
            </div>
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
          publicURL
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default Work;
