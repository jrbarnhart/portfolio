import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Lander from "./components/Lander/Lander";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const MainLayout = () => {
  return (
    <>
      <Lander />
      <Nav />

      <ContentContainer>
        <About />
      </ContentContainer>
      <div className="h-12 z-[1000] w-screen sticky top-0 bg-gradient-to-t from-red-500 to-blue-500"></div>

      <ContentContainer>
        <Skills />
      </ContentContainer>

      <ContentContainer>
        <Projects />
      </ContentContainer>

      <ContentContainer>
        <Contact />
      </ContentContainer>
    </>
  );
};

export default MainLayout;
