import React, { useEffect, useState } from "react";
import Image from "next/image";
import Face from "../../public/face.svg";
import FaceImage from "./FaceImage";

const HeroImage = ({ data, category }) => {
  const [url, setUrl] = useState();
  const size = category === "hero" ? "100" : "50";

  useEffect(() => {
    setUrl(category === "hero" ? data.photoURL : data.creatorImage);
  }, [data, category]);

  return (
    <>
      {url ? (
        <Image src={url} width={size} height={size} alt={data.name} />
      ) : (
        <FaceImage />
      )}
    </>
  );
};

export default HeroImage;
