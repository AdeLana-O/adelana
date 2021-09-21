import React, { useState, useRef, useEffect, useCallback } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const timer = 4800;

const Work = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const { allFile } = useStaticQuery(query);

  const mobileImgs = allFile.edges.filter(file => {
    return file.node.name.includes("mobile");
  });

  const imgIndexes = mobileImgs.length - 1;

  const imgTitle = mobileImgs[currentImage].node.name
    .replace(/-mobile/, "")
    .replace("-", " ");

  const prevImage = useRef();
  const intervalId = useRef();
  const direction = useRef();

  const change = useCallback(() => {
    direction.current = null;
    setCurrentImage(state => (state === imgIndexes ? 0 : state + 1));
  }, [imgIndexes]);

  useEffect(() => {
    intervalId.current = setInterval(change, timer);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [change]);

  useEffect(() => {
    prevImage.current = currentImage;
  }, [currentImage]);

  useEffect(() => {
    if (direction.current) {
      const imageElement = document.querySelectorAll(
        ".slide__image__container .slide__image"
      );

      imageElement.forEach(elem => {
        if (
          elem.classList.contains("slide__left") ||
          elem.classList.contains("slide__right")
        ) {
          elem.className = "slide__image slide__active";
        }
      });
    }
  });

  const changeImage = (e, index) => {
    e.preventDefault();

    if (currentImage < index) {
      direction.current = "right";
    } else {
      direction.current = "left";
    }

    clearInterval(intervalId.current);

    setCurrentImage(index);

    intervalId.current = setInterval(change, timer);
  };

  const renderImages = mobileImgs.map((img, index) => {
    const { id, name, childImageSharp } = img.node;
    let className;

    if (direction.current === "left" && currentImage === index) {
      className = "slide__image slide__left";
    } else if (direction.current === "right" && currentImage === index) {
      className = "slide__image slide__right";
    } else if (currentImage === index) {
      className = "slide__image slide__active";
    } else if (direction.current === "left" && prevImage.current === index) {
      className = "slide__image slide__prev__left";
    } else if (direction.current === "right" && prevImage.current === index) {
      className = "slide__image slide__prev__right";
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

  const renderBtns = mobileImgs.map((img, index) => {
    const { id, name } = img.node;
    const label = name.replace(/-mobile/, "").replace("-", " ");
    let className;

    if (currentImage === index) {
      className = "slide__btn slide__btn--active";
    } else {
      className = "slide__btn";
    }

    return (
      <li className="slide__btn__item" key={id}>
        <button
          aria-label={`Select ${label}`}
          className={className}
          onClick={e => changeImage(e, index)}
        />
      </li>
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
            <div className="mobile__device">
              <div className="slide__image__container">{renderImages}</div>
            </div>
            <div className="slide__image__title">
              <span>{imgTitle}</span>
            </div>
            <div className="slide__btns">
              <ul className="slide__btns__container">{renderBtns}</ul>
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
