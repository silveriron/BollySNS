import React from "react";
import styles from "./Input.module.css";

const Input = ({
  type,
  onChange,
  value,
  placeholder,
  maxLength,
  style,
  required,
}) => {
  return (
    <input
      className={styles.input}
      style={style}
      type={type}
      accept={type === "file" ? "image/*" : null}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      required={required}
    />
  );
};

export default Input;
