// This component toggles the "dark" class on the html element, implementing
// the Tailwind CSS selector dark mode strategy. https://tailwindcss.com/docs/dark-mode

import { useEffect } from "react";

const DarkModeButton = () => {
  // Set initial darkmode preference
  useEffect(() => {
    const storedDarkmodePref = localStorage.getItem("darkmode");

    // No stored preference for darkmode found
    if (!storedDarkmodePref) {
      const sysDarkmodePref = window.matchMedia("(prefers-color-scheme: dark)");
      if (sysDarkmodePref.matches) {
        document.body.classList.add("dark");
      }
    } else {
      // Use the stored preference
      if (storedDarkmodePref === "true") {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    }
  }, []);

  const toggleDarkmode = () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return <button onClick={toggleDarkmode}>Toggle Darkmode</button>;
};

export default DarkModeButton;
