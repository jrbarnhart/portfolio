import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="grid gap-y-5">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default MainLayout;
