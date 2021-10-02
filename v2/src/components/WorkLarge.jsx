import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import flattenImages from "../utils/flattenImages";

const timer = 4800;

const WorkLarge = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clicked, setClicked] = useState(false);

  const slideImages = useMemo(() => flattenImages(images), [images]);

  const imageIndex = slideImages.length - 1;

  const imgTitle = slideImages[currentIndex].name;

  const prevIndex = useRef();
  const intervalId = useRef();
  const imageElements = useRef([]);

  const change = useCallback(() => {
    setClicked(false);
    setCurrentIndex(state => (state === imageIndex ? 0 : state + 1));
  }, [imageIndex]);

  useEffect(() => {
    intervalId.current = setInterval(change, timer);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [change]);

  useEffect(() => {
    prevIndex.current = currentIndex;
  }, [currentIndex]);

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
    setCurrentIndex(index);

    intervalId.current = setInterval(change, timer);
  };

  const renderMobile = slideImages.map((img, index) => {
    const { id, name, childImageSharp } = img.mobile.node;
    const image = getImage(childImageSharp);
    let className;

    const cbRef = element => {
      if (imageElements.current && Array.isArray(imageElements.current)) {
        if (element && !imageElements.current.includes(element)) {
          imageElements.current.push(element);
        }
      }
    };

    if (clicked && currentIndex < prevIndex.current && currentIndex === index) {
      className = "slide__image slide__left";
    } else if (
      clicked &&
      currentIndex > prevIndex.current &&
      currentIndex === index
    ) {
      className = "slide__image slide__right";
    } else if (
      clicked &&
      currentIndex < prevIndex.current &&
      prevIndex.current === index
    ) {
      className = "slide__image slide__prev__left";
    } else if (
      clicked &&
      currentIndex > prevIndex.current &&
      prevIndex.current === index
    ) {
      className = "slide__image slide__prev__right";
    } else if (currentIndex === index) {
      className = "slide__image slide__active";
    } else if (prevIndex.current === index) {
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

  const renderDesktop = slideImages.map((img, index) => {
    const { id, name, childImageSharp } = img.desktop.node;
    const image = getImage(childImageSharp);
    let className;

    const cbRef = element => {
      if (imageElements.current && Array.isArray(imageElements.current)) {
        if (element && !imageElements.current.includes(element)) {
          imageElements.current.push(element);
        }
      }
    };

    if (clicked && currentIndex < prevIndex.current && currentIndex === index) {
      className = "slide__image slide__left";
    } else if (
      clicked &&
      currentIndex > prevIndex.current &&
      currentIndex === index
    ) {
      className = "slide__image slide__right";
    } else if (
      clicked &&
      currentIndex < prevIndex.current &&
      prevIndex.current === index
    ) {
      className = "slide__image slide__prev__left";
    } else if (
      clicked &&
      currentIndex > prevIndex.current &&
      prevIndex.current === index
    ) {
      className = "slide__image slide__prev__right";
    } else if (currentIndex === index) {
      className = "slide__image slide__active";
    } else if (prevIndex.current === index) {
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

  const renderButtons = slideImages.map(({ name }, index) => {
    let className;

    if (currentIndex === index) {
      className = "slide__btn slide__btn--active";
    } else {
      className = "slide__btn";
    }

    return (
      <li className="slide__btn__item" key={index}>
        <button
          aria-label={`Select ${name}`}
          className={className}
          onClick={() => changeImage(index)}
        />
      </li>
    );
  });

  return (
    <div className="desktop__view__container">
      <div className="device__container">
        <div className="mobile__device__container">
          <div className="mobile__device">
            <div className="slide__images__container">{renderMobile}</div>
          </div>
        </div>
        <div className="desktop__device__container">
          <div className="desktop__device">
            <div className="slide__images__container">{renderDesktop}</div>
          </div>
        </div>
      </div>
      <div className="slide__image__title">
        <span>{imgTitle}</span>
      </div>
      <div className="slide__btns">
        <ul className="slide__btns__container">{renderButtons}</ul>
      </div>
    </div>
  );
};

export default WorkLarge;

WorkLarge.propTypes = {
  images: PropTypes.array.isRequired,
};
