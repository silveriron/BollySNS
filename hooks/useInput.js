import { useState } from "react";

const useInput = (initialValue) => {
  const [val, setVal] = useState(initialValue);

  const onChange = (e) => {
    let value = e.target.value;
    value = value.replaceAll("<br/>", "\r\n");
    setVal(value);
  };

  return [val, onChange, setVal];
};

export default useInput;
