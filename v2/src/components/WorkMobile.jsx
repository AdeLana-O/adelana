import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import withSlides from "../HOC/withSlides";
import filterImages from "../utils/filterImages";

const WorkMobile = ({
  data,
  currentIndex,
  clicked,
  prevIndex,
  imageElements,
  changeImage,
}) => {
  const imgTitle = data[currentIndex].node.name
    .replace(/-mobile/, "")
    .replace("-", " ");

  const renderImages = data.map((img, index) => {
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

  const renderBtns = data.map((img, index) => {
    const { id, name } = img.node;
    const label = name.replace(/-mobile/, "").replace("-", " ");
    let className;

    if (currentIndex === index) {
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
    <div className="mobile__view__container">
      <div className="device__container">
        <div className="mobile__device">
          <div className="slide__images__container">{renderImages}</div>
        </div>
      </div>
      <div className="slide__image__title">
        <span>{imgTitle}</span>
      </div>
      <div className="slide__btns">
        <ul className="slide__btns__container">{renderBtns}</ul>
      </div>
    </div>
  );
};

export default withSlides(WorkMobile, filterImages);

WorkMobile.propTypes = {
  data: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  clicked: PropTypes.bool.isRequired,
  prevIndex: PropTypes.object.isRequired,
  imageElements: PropTypes.object.isRequired,
  changeImage: PropTypes.func.isRequired,
};
