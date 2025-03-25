import { SetStateAction } from "react";
import DarkmodeButton from "../ui/DarkModeButton";
import SectionLink from "../ui/SectionLink";

type HeroProps = {
  isDarkmode: boolean;
  setIsDarkmode: React.Dispatch<SetStateAction<boolean>>;
};

export default function Hero({ ...props }: HeroProps) {
  const { isDarkmode, setIsDarkmode } = props;
  return (
    <section className="h-screen grid bg-radial from-violet-500/20 via-transparent to-transparent text-blue-950 dark:text-violet-50">
      <DarkmodeButton
        darkmode={isDarkmode}
        setDarkmode={setIsDarkmode}
        className="m-4 row-start-1 col-start-1 justify-self-end z-10"
      />
      <div className="row-start-1 col-start-1 justify-self-center h-full max-w-6xl grid gap-4 grid-rows-[1fr_min-content_min-content_1fr] grid-cols-4">
        <h2 className="[text-shadow:_1px_1px_5px_var(--tw-shadow-color)] shadow-indigo-500/50 dark:shadow-indigo-950 text-3xl md:text-5xl font-bold  px-8 row-start-1 col-span-full self-end">
          Hello, I'm Josh.
        </h2>
        <h1 className="[text-shadow:_1px_1px_5px_var(--tw-shadow-color)] shadow-indigo-500/50 dark:shadow-indigo-950 text-4xl md:text-6xl font-bold px-8 row-start-2 col-span-full">
          I build modern web applications that solve real problems.
        </h1>
        <h2 className="[text-shadow:_1px_1px_5px_var(--tw-shadow-color)] shadow-indigo-500/50 dark:shadow-indigo-950 text-2xl md:text-4xl font-semibold px-8 row-start-3 col-span-full">
          From APIs to front-end interfaces and custom tools, I create fast,
          practical solutions using TypeScript, React, and modern tooling.
        </h2>
        <nav className="px-8 py-10 row-start-4 col-span-full flex gap-10">
          <SectionLink section="Projects" />
          <SectionLink section="Contact" />
        </nav>
      </div>
    </section>
  );
}
