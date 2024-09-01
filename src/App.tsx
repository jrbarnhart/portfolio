import { useEffect, useState } from "react";

import DarkmodeContext from "./contexts/DarkmodeContext";
import Layout from "./Layout";

function App() {
  const [darkmode, setDarkmode] = useState(localStorage.getItem("darkmode"));

  // Set initial darkmode state using prefers-color-scheme if no local storage item
  useEffect(() => {
    if (darkmode === null) {
      const sysDarkmodePref = window.matchMedia("(prefers-color-scheme: dark)");
      if (sysDarkmodePref.matches) {
        setDarkmode("true");
      } else {
        setDarkmode("false");
      }
    }
  }, [darkmode]);

  const setDarkmodeState = (value: "true" | "false") => {
    setDarkmode(value);
  };

  return (
    <DarkmodeContext.Provider value={{ darkmode, setDarkmodeState }}>
      <Layout />
    </DarkmodeContext.Provider>
  );
}

export default App;
