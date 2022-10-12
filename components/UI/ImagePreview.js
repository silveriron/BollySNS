import React from "react";
import Image from "next/image";
import styles from "./ImagePreview.module.css";

const ImagePreview = ({ image, setImage }) => {
  const onClearImageHandler = () => setImage(null);
  return (
    <div className={styles.imageDiv}>
      <Image src={image} alt={image} width={400} height={500} />
      <button className={styles.imageclearbtn} onClick={onClearImageHandler}>
        X
      </button>
    </div>
  );
};

export default ImagePreview;
