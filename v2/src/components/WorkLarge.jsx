import React, { useMemo } from "react";
import PropTypes from "prop-types";
import flattenImages from "../utils/flattenImages";

const WorkLarge = ({ images }) => {
  const slideImages = useMemo(() => flattenImages(images), [images]);

  return (
    <div>
      <p>Hello World</p>
    </div>
  );
};

export default WorkLarge;

WorkLarge.propTypes = {
  images: PropTypes.array.isRequired,
};
