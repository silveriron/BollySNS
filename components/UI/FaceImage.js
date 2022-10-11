import React, { useState } from "react";
import Face from "../../public/face.svg";

const FaceImage = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return <Face fill={isDarkMode ? "white" : "black"} />;
};

export default FaceImage;
