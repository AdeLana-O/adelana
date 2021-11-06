import React from "react";
import PropTypes from "prop-types";
import renderSlides from "./helpers/renderSlides";

const MobileDevice = ({
  images,
  currentIndex,
  prevIndex,
  clicked,
  imageElements,
}) => {
  const renderImages = renderSlides({
    data: images,
    currentIndex,
    prevIndex,
    clicked,
    imageElements,
  });

  return (
    <div className="mobile__device">
      <div className="slide__images__container">{renderImages}</div>
    </div>
  );
};

MobileDevice.propTypes = {
  images: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  prevIndex: PropTypes.object.isRequired,
  clicked: PropTypes.bool.isRequired,
  imageElements: PropTypes.object.isRequired,
};

export default MobileDevice;
