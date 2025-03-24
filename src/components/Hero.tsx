import { SetStateAction } from "react";
import DarkmodeButton from "./ui/DarkModeButton";

type HeroPropTypes = {
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<SetStateAction<boolean>>;
};

export default function Hero({ ...props }: HeroPropTypes) {
  const { isDarkmode, setIsDarkmode } = props;
  return (
    <section>
      <DarkmodeButton isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <p>Hero</p>
    </section>
  );
}
