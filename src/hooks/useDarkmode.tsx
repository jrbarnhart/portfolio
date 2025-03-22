import { useState } from "react";

export default function useDarkmode() {
  const [isDarkmode, setIsDarkmode] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches ? false : true
  );

  const DarkmodeButton = () => (
    <button
      type="button"
      onClick={() => {
        setIsDarkmode((prev) => !prev);
      }}
    >
      {isDarkmode ? "Lightmode" : "Darkmode"}
    </button>
  );

  return { isDarkmode, DarkmodeButton };
}
