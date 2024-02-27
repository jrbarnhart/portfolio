// This component toggles the "dark" class on the html element, implementing
// the Tailwind CSS selector dark mode strategy. https://tailwindcss.com/docs/dark-mode

const DarkModeButton = () => {
  const toggleDarkmode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkmode", "false");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkmode", "true");
    }
  };

  return <button onClick={toggleDarkmode}>Toggle Darkmode</button>;
};

export default DarkModeButton;
