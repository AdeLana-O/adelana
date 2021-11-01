import React from "react";
import PropTypes from "prop-types";
import formatName from "../utils/formatName";

const SlideButtons = ({ images, currentIndex, changeImage }) => {
  const renderButtons = images.map((img, index) => {
    const { id, name } = img.node;
    const label = formatName(name);
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

  return <ul className="slide__btns__container">{renderButtons}</ul>;
};

SlideButtons.propTypes = {
  images: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  changeImage: PropTypes.func.isRequired,
};

export default SlideButtons;
