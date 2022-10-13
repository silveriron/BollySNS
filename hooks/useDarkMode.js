import { useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const fill = isDarkMode ? "white" : "black";

  return fill;
};

export default useDarkMode;
