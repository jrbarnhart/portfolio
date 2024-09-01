import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Lander from "./components/Lander/Lander";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/About/Skills";

const Layout = () => {
  return (
    <div className="grid h-[100svh] w-screen">
      <Nav />
      <div id="content" className="overflow-y-auto">
        <Lander />
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
    </div>
  );
};

export default Layout;
