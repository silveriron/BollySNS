import React from "react";
import styles from "./ImageUploadBtn.module.css";
import Upload from "../../public/image_FILL0_wght400_GRAD0_opsz24.svg";

const ImageUploadBtn = ({ onChange }) => {
  return (
    <>
      <label htmlFor="imageUpload">
        <Upload fill="white" />
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
