import React from "react";
import styles from "./Button.module.css";

const Button = ({ type, onClick, name, children, style }) => {
  return (
    <button
      type={type}
      style={style}
      name={name}
      className={styles.btn}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
