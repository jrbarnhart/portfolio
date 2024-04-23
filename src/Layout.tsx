import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Lander from "./components/Lander/Lander";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const MainLayout = () => {
  return (
    <div
      id="content"
      className="bg-neutral-50 dark:bg-zinc-900 justify-self-center grid gap-y-5 md:gap-y-8 lg:gap-y-12 h-screen w-screen overflow-y-scroll"
    >
      <Lander />

      <Nav />

      <ContentContainer>
        <About />
      </ContentContainer>

      <ContentContainer>
        <Skills />
      </ContentContainer>

      <ContentContainer>
        <Projects />
      </ContentContainer>

      <ContentContainer>
        <Contact />
      </ContentContainer>
    </div>
  );
};

export default MainLayout;
