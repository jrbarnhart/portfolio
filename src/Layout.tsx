import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Lander from "./components/Lander/Lander";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const MainLayout = () => {
  return (
    <div
      id="content"
      className="bg-neutral-50 dark:bg-zinc-900 justify-self-center grid gap-y-5 h-screen w-full overflow-y-scroll"
    >
      <Lander />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainLayout;
