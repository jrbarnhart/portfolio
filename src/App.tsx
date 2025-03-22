import About from "./components/About";
import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import MoreProjects from "./components/MoreProjects";
import Skills from "./components/Skills";
import useDarkmode from "./hooks/useDarkmode";

function App() {
  const { isDarkmode, DarkmodeButton } = useDarkmode();

  return (
    <div
      id="app-container"
      className={`${
        isDarkmode ? "dark " : ""
      }h-screen w-screen dark:bg-black dark:text-white`}
    >
      <DarkmodeButton />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <MoreProjects />
      <Contact />
    </div>
  );
}

export default App;
