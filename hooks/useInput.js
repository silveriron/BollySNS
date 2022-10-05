import { useState } from "react";

const useInput = (initialValue) => {
  const [val, setVal] = useState(initialValue);

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return [val, onChange, setVal];
};

export default useInput;
