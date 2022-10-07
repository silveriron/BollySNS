import React from "react";
import Image from "next/image";

const ImagePreview = ({ image, setImage }) => {
  const onClearImageHandler = () => setImage(null);
  return (
    <div>
      <Image src={image} alt={image} width="200" height="200" />
      <button onClick={onClearImageHandler}>Clear</button>
    </div>
  );
};

export default ImagePreview;
