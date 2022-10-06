import React from "react";

const Input = ({ type, onChange, value, placeholder, maxLength }) => {
  return (
    <input
      type={type}
      accept={type === "file" ? "image/*" : null}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};

export default Input;
