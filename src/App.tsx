import About from "./components/About";
import Contact from "./components/Contact";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import MoreProjects from "./components/MoreProjects";
import Skills from "./components/Skills";

function App() {
  return (
    <div id="app-container">
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
