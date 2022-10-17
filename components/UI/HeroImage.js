import React, { useEffect, useState } from "react";
import Image from "next/image";
import FaceImage from "./FaceImage";
import styles from "./HeroImage.module.css";

const HeroImage = ({ data, category, size }) => {
  const [url, setUrl] = useState();

  useEffect(() => {
    setUrl(category === "hero" ? data.photoURL : data.creatorImage);
  }, [data, category]);

  return (
    <>
      {url ? (
        <div
          className={styles.heroimage}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          <Image src={url} width={size} height={size} alt={data.name} />
        </div>
      ) : (
        <div className={styles.heroimage}>
          <FaceImage />
        </div>
      )}
    </>
  );
};

export default HeroImage;
