import React from "react";
import useDarkMode from "../../hooks/useDarkMode";
import styles from "./ImageUploadBtn.module.css";
import Upload from "../../public/image_FILL0_wght400_GRAD0_opsz24.svg";

const ImageUploadBtn = ({ onChange }) => {
  const isDarkMode = useDarkMode();
  return (
    <>
      <label htmlFor="imageUpload">
        <Upload fill={isDarkMode ? "white" : "black"} />
      </label>
      <input
        id="imageUpload"
        className={styles.fileUpload}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </>
  );
};

export default ImageUploadBtn;
