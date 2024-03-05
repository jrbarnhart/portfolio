// This component toggles the "dark" class on the html element, implementing
// the Tailwind CSS selector dark mode strategy. https://tailwindcss.com/docs/dark-mode

import { useContext } from "react";
import DarkmodeContext from "../../contexts/DarkmodeContext";

import lightIcon from "../../assets/light_mode.svg";
import darkIcon from "../../assets/dark_mode.svg";

// Note that the initial theme is set by a small script in the index.html file. This
// prevents flickering that could occurr if this step were done in a useEffect() here.

const DarkModeButton = () => {
  const { darkmode, setDarkmodeState } = useContext(DarkmodeContext);

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
    <button onClick={toggleDarkmode}>
      <img
        src={darkmode === "true" ? darkIcon : lightIcon}
        alt="icon for dark / light mode"
        className="h-full"
      />
    </button>
  );
};

export default DarkModeButton;
