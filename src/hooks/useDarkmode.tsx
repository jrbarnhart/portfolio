import { useState } from "react";

export default function useDarkmode() {
  const [darkmode, setDarkmode] = useState(true);

  return { darkmode, setDarkmode };
}
