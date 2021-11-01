import formatName from "./formatName";

const filterImages = images => {
  return images.reduce((imageList, image) => {
    if (!image.node.name.includes("mobile")) {
      return imageList;
    }

    const temp = {
      name: formatName(image.node.name),
      mobile: image,
    };

    imageList.push(temp);

    return imageList;
  }, []);
};

export default filterImages;
