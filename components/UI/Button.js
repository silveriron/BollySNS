import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { type } = props;
  return (
    <button type={type} className={styles.btn}>
      {props.children}
    </button>
  );
};
export default Button;
