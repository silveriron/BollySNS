import { useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  return isDarkMode;
};

export default useDarkMode;
