import { useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import DarkmodeContext from "./contexts/DarkmodeContext";

function App() {
  const [darkmode, setDarkmode] = useState(localStorage.getItem("darkmode"));

  const setDarkmodeState = (value: "true" | "false") => {
    setDarkmode(value);
  };

  return (
    <DarkmodeContext.Provider value={{ darkmode, setDarkmodeState }}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </DarkmodeContext.Provider>
  );
}

export default App;
