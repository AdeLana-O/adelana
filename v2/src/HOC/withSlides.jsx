import React, { useState, useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const withSlides = (Component, cb) => {
  const timer = 4800;

  const Slides = ({ images }) => {
    const [data] = useState(() => cb(images));
    const [currentIndex, setCurrentIndex] = useState(0);
    const [clicked, setClicked] = useState(false);

    const imgIndexes = data.length - 1;

    const intervalId = useRef();
    const prevIndex = useRef();
    const imageElements = useRef([]);

    const change = useCallback(() => {
      setClicked(false);
      setCurrentIndex(state => (state === imgIndexes ? 0 : state + 1));
    }, [imgIndexes]);

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

    return (
      <Component
        data={data}
        currentIndex={currentIndex}
        clicked={clicked}
        prevIndex={prevIndex}
        imageElements={imageElements}
        changeImage={changeImage}
      />
    );
  };

  Slides.propTypes = {
    images: PropTypes.array.isRequired,
  };

  return Slides;
};

export default withSlides;
