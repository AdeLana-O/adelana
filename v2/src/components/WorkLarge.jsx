import React from "react";
import PropTypes from "prop-types";
import withSlides from "../HOC/withSlides";
import MobileDevice from "./MobileDevice";
import SlideButtons from "./SlideButtons";
import flattenImages from "../utils/flattenImages";
import renderSlides from "../utils/renderSlides";
import arrayMapper from "../utils/arrayMapper";

const WorkLarge = ({
  data,
  currentIndex,
  clicked,
  prevIndex,
  imageElements,
  changeImage,
}) => {
  const { name } = data[currentIndex];
  const dataRenderer = arrayMapper(data, "mobile");
  const slides = arrayMapper(data, "desktop");

  const renderDesktop = renderSlides({
    data: slides,
    currentIndex,
    prevIndex,
    clicked,
    imageElements,
  });

  return (
    <div className="desktop__view__container">
      <div className="device__container">
        <div className="mobile__device__container">
          <MobileDevice
            images={dataRenderer}
            currentIndex={currentIndex}
            prevIndex={prevIndex}
            clicked={clicked}
            imageElements={imageElements}
          />
        </div>
        <div className="desktop__device__container">
          <div className="desktop__device">
            <div className="slide__images__container">{renderDesktop}</div>
          </div>
        </div>
      </div>
      <div className="slide__image__title">
        <span>{name}</span>
      </div>
      <div className="slide__btns">
        <SlideButtons
          images={dataRenderer}
          currentIndex={currentIndex}
          changeImage={changeImage}
        />
      </div>
    </div>
  );
};

export default withSlides(WorkLarge, flattenImages);

WorkLarge.propTypes = {
  data: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  clicked: PropTypes.bool.isRequired,
  prevIndex: PropTypes.object.isRequired,
  imageElements: PropTypes.object.isRequired,
  changeImage: PropTypes.func.isRequired,
};
