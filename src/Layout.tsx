import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Lander from "./components/Lander/Lander";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/About/Skills";
import Footer from "./components/Footer/Footer";

const MainLayout = () => {
  return (
    <div
      id="content"
      className="relative grid h-screen w-screen overflow-y-scroll scroll-smooth"
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

      <Footer />
    </div>
  );
};

export default MainLayout;
