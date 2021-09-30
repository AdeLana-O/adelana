const flattenImages = images => {
  const temp = {
    name: null,
    mobile: null,
    desktop: null,
  };

  return images.reduce((imageList, image) => {
    const imageName = image.node.name.replace(/-mobile/, "").replace("-", " ");
    const isMobile = image.node.name.includes("mobile");

    const indexedImage = imageList.find(item => item.name === imageName);

    if (!indexedImage) {
      temp.name = imageName;

      if (isMobile) {
        temp.mobile = image;
      } else {
        temp.desktop = image;
      }

      imageList.push(temp);
    } else {
      const newTemp = { ...indexedImage };

      if (!newTemp.mobile && isMobile) {
        newTemp.mobile = image;
      } else if (!newTemp.desktop && !isMobile) {
        newTemp.desktop = image;
      }

      imageList = imageList.map(item => {
        if (item.name === newTemp.name) {
          return newTemp;
        }

        return item;
      });
    }

    return imageList;
  }, []);
};

export default flattenImages;
