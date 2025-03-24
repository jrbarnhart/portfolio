import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import FeaturedProjects from "./components/sections/FeaturedProjects";
import Hero from "./components/sections/Hero";
import MoreProjects from "./components/sections/MoreProjects";
import Skills from "./components/sections/Skills";
import useDarkmode from "./hooks/useDarkmode";

function App() {
  const { isDarkmode, setIsDarkmode } = useDarkmode();

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
