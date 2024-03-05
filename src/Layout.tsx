import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const MainLayout = () => {
  return (
    <div className="grid">
      <Nav />
      <Header />
      <main className="justify-self-center grid gap-y-5  w-screen md:w-[768px]">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default MainLayout;
