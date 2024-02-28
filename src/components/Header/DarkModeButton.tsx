// This component toggles the "dark" class on the html element, implementing
// the Tailwind CSS selector dark mode strategy. https://tailwindcss.com/docs/dark-mode

import { useContext } from "react";
import DarkmodeContext from "../../contexts/DarkmodeContext";

// Note that the initial theme is set by a small script in the index.html file. This
// prevents flickering that could occurr if this step were done in a useEffect() here.

const DarkModeButton = () => {
  const { setDarkmodeState } = useContext(DarkmodeContext);

  const toggleDarkmode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkmode", "false");
      if (setDarkmodeState) {
        setDarkmodeState("false");
      }
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkmode", "true");
      if (setDarkmodeState) {
        setDarkmodeState("true");
      }
    }
  };

  return (
    <button onClick={toggleDarkmode} className="absolute top-0 right-0 p-3">
      Toggle Darkmode
    </button>
  );
};

export default DarkModeButton;
