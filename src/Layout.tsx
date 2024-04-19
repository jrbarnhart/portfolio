import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Lander from "./components/Lander/Lander";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const MainLayout = () => {
  return (
    <main className="justify-self-center grid gap-y-5 h-screen w-full overflow-y-auto">
      <Lander />
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default MainLayout;
