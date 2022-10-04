import { useState } from "react";

const useInput = () => {
  const [val, setVal] = useState("");

  const onChange = (e) => {
    setVal(e.target.value);
  };

  return [val, onChange, setVal];
};

export default useInput;
