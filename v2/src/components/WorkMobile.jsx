import React from "react";
import PropTypes from "prop-types";
import withSlides from "../HOC/withSlides";
import MobileDevice from "./MobileDevice";
import SlideButtons from "./SlideButtons";
import filterImages from "../utils/filterImages";
import arrayMapper from "../utils/arrayMapper";

const WorkMobile = ({
  data,
  currentIndex,
  clicked,
  prevIndex,
  imageElements,
  changeImage,
}) => {
  const { name } = data[currentIndex];
  const dataRenderer = arrayMapper(data, "mobile");

  return (
    <>
      <div className="device__container">
        <MobileDevice
          images={dataRenderer}
          currentIndex={currentIndex}
          prevIndex={prevIndex}
          clicked={clicked}
          imageElements={imageElements}
        />
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
    </>
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
