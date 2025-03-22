import { useEffect, useState } from "react";

export default function useDarkmode() {
  const [isDarkmode, setIsDarkmode] = useState(true);

  // Set initial darkmode to user preference
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      setIsDarkmode(false);
    }
  }, []);

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
