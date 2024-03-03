import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const MainLayout = () => {
  return (
    <div className="grid">
      <Header />
      <main className="justify-self-center grid gap-y-5 w-[768px]">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default MainLayout;
