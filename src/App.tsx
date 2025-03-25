import Background from "./components/background/Background";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Hero from "./components/sections/Hero";
import MoreProjects from "./components/sections/MoreProjects";
import Skills from "./components/sections/Skills";
import useDarkmode from "./hooks/useDarkmode";

function App() {
  const { darkmode, setDarkmode } = useDarkmode();

  // dark: tailwind classes will be applied to any element that has a parent with the dark class
  // @custom-variant in index.css causes this behavior
  return (
    <div
      id="app-container"
      className={`${
        darkmode ? "dark " : ""
      }h-screen w-screen overflow-hidden bg-transparent dark:text-white grid`}
    >
      <Background className="row-start-1 col-span-full -z-10" />
      <div
        id="scroll-container"
        className="h-full overflow-auto row-start-1 col-span-full"
      >
        <Hero isDarkmode={darkmode} setIsDarkmode={setDarkmode} />
        <About />
        <Skills />
        <FeaturedProjects />
        <MoreProjects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
