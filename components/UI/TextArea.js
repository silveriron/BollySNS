import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ placeholder, onChange, value }) => {
  const autoResizeTextarea = () => {
    const textarea = document.querySelector("textarea");
    if (textarea) {
      textarea.style.height = "50px";
      let height = textarea.scrollHeight;
      textarea.style.height = `${height + 8}px`;
    }
  };

  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={120}
      onKeyUp={autoResizeTextarea}
      onKeyDown={autoResizeTextarea}
      value={value}
    />
  );
};

export default TextArea;
