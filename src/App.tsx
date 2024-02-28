import { createContext, useState } from "react";

import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

interface DarkmodeContext {
  darkmode: string | null;
  toggleDarkmodeState: null | (() => void);
}

const DarkmodeContext = createContext<DarkmodeContext>({
  darkmode: null,
  toggleDarkmodeState: null,
});

function App() {
  const [darkmode, setDarkmode] = useState(localStorage.getItem("darkmode"));

  const toggleDarkmodeState = () => {
    if (darkmode !== "true") {
      setDarkmode("true");
    } else {
      setDarkmode("false");
    }
  };

  return (
    <DarkmodeContext.Provider value={{ darkmode, toggleDarkmodeState }}>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </DarkmodeContext.Provider>
  );
}

export default App;
