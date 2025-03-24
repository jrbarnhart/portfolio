import { SetStateAction } from "react";
import DarkmodeButton from "../ui/DarkModeButton";

type HeroProps = {
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<SetStateAction<boolean>>;
};

export default function Hero({ ...props }: HeroProps) {
  const { isDarkmode, setIsDarkmode } = props;
  return (
    <section>
      <DarkmodeButton isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <h1>Headline</h1>
      <h2>Subtext</h2>

      <p>Hero</p>
    </section>
  );
}
