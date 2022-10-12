import React, { useEffect, useState } from "react";
import Image from "next/image";
import FaceImage from "./FaceImage";
import styles from "./HeroImage.module.css";

const HeroImage = ({ data, category }) => {
  const [url, setUrl] = useState();
  const size = category === "hero" ? "100" : "50";

  useEffect(() => {
    setUrl(category === "hero" ? data.photoURL : data.creatorImage);
  }, [data, category]);

  return (
    <>
      {url ? (
        <div className={styles.heroimage}>
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
