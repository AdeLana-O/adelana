const filterImages = images => {
  return images.filter(image => image.node.name.includes("mobile"));
};

export default filterImages;
