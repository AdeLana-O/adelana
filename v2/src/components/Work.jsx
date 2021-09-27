import React, { useState, useRef, useEffect, useCallback } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const timer = 4800;

const Work = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [clicked, setClicked] = useState(false);

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
  const imageElements = useRef([]);

  const change = useCallback(() => {
    setClicked(false);
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
    if (Array.isArray(imageElements.current)) {
      imageElements.current.forEach(element => {
        if (
          element.classList.contains("slide__left") ||
          element.classList.contains("slide__right")
        ) {
          element.className = "slide__image slide__active";
        }

        if (element.classList.contains("slide__prev__left")) {
          element.className = "slide__image prev__left";
        }

        if (element.classList.contains("slide__prev__right")) {
          element.className = "slide__image prev__right";
        }
      });
    }
  });

  const changeImage = index => {
    clearInterval(intervalId.current);

    setClicked(true);
    setCurrentImage(index);

    intervalId.current = setInterval(change, timer);
  };

  const renderImages = mobileImgs.map((img, index) => {
    const { id, name, childImageSharp } = img.node;

    const cbRef = element => {
      if (imageElements.current && Array.isArray(imageElements.current)) {
        if (element && !imageElements.current.includes(element)) {
          imageElements.current.push(element);
        }
      }
    };

    const image = getImage(childImageSharp);

    let className;

    if (clicked && currentImage < prevImage.current && currentImage === index) {
      className = "slide__image slide__left";
    } else if (
      clicked &&
      currentImage > prevImage.current &&
      currentImage === index
    ) {
      className = "slide__image slide__right";
    } else if (
      clicked &&
      currentImage < prevImage.current &&
      prevImage.current === index
    ) {
      className = "slide__image slide__prev__left";
    } else if (
      clicked &&
      currentImage > prevImage.current &&
      prevImage.current === index
    ) {
      className = "slide__image slide__prev__right";
    } else if (currentImage === index) {
      className = "slide__image slide__active";
    } else if (prevImage.current === index) {
      className = "slide__image slide__prev";
    } else {
      className = "slide__image";
    }

    return (
      <div className={className} key={id} ref={cbRef}>
        <GatsbyImage image={image} alt={name} />
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
          onClick={() => changeImage(index)}
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
