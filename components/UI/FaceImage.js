import React from "react";
import Face from "../../public/face.svg";
import useDarkMode from "../../hooks/useDarkMode";

const FaceImage = () => {
  const isDarkMode = useDarkMode();

  return <Face fill={isDarkMode ? "white" : "black"} />;
};

export default FaceImage;
