import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Hero from "./components/sections/Hero";
import MoreProjects from "./components/sections/MoreProjects";
import Skills from "./components/sections/Skills";
import useDarkmode from "./hooks/useDarkmode";

function App() {
  const { isDarkmode, setIsDarkmode } = useDarkmode();

  // dark: tailwind classes will be applied to any element that has a parent with the dark class
  // @custom-variant in index.css causes this behavior
  return (
    <div
      id="app-container"
      className={`${
        isDarkmode ? "dark " : ""
      }h-screen w-screen dark:bg-black dark:text-white`}
    >
      <Hero isDarkmode={isDarkmode} setIsDarkmode={setIsDarkmode} />
      <About />
      <Skills />
      <FeaturedProjects />
      <MoreProjects />
      <Contact />
    </div>
  );
}

export default App;
