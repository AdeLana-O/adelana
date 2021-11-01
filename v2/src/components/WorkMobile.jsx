import React from "react";
import PropTypes from "prop-types";
import withSlides from "../HOC/withSlides";
import MobileDevice from "./MobileDevice";
import SlideButtons from "./SlideButtons";
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

  return (
    <div className="mobile__view__container">
      <div className="device__container">
        <MobileDevice
          images={data}
          currentIndex={currentIndex}
          prevIndex={prevIndex}
          clicked={clicked}
          imageElements={imageElements}
        />
      </div>
      <div className="slide__image__title">
        <span>{imgTitle}</span>
      </div>
      <div className="slide__btns">
        <SlideButtons
          images={data}
          currentIndex={currentIndex}
          changeImage={changeImage}
        />
      </div>
    </div>
  );
};

WorkMobile.propTypes = {
  data: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  clicked: PropTypes.bool.isRequired,
  prevIndex: PropTypes.object.isRequired,
  imageElements: PropTypes.object.isRequired,
  changeImage: PropTypes.func.isRequired,
};

export default withSlides(WorkMobile, filterImages);
