import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const renderSlides = ({ data, currentIndex, prevIndex, clicked, imageElements }) => {
  return data.map((img, index) => {
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
};

export default renderSlides;
