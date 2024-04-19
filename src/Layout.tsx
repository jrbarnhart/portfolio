import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Lander from "./components/Lander/Lander";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const MainLayout = () => {
  return (
    <main className="justify-self-center grid gap-y-5 h-screen w-full max-w-[768px] overflow-y-auto">
      <Lander />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default MainLayout;
