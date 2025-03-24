import { useState } from "react";

export default function useDarkmode() {
  const [isDarkmode, setIsDarkmode] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches ? false : true
  );

  return { isDarkmode, setIsDarkmode };
}
