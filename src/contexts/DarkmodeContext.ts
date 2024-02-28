import { createContext } from "react";

interface DarkmodeContext {
  darkmode: string | null;
  setDarkmodeState: null | ((value: "true" | "false") => void);
}

const DarkmodeContext = createContext<DarkmodeContext>({
  darkmode: localStorage.getItem("darkmode"),
  setDarkmodeState: null,
});

export default DarkmodeContext;
