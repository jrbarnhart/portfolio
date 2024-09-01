import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Nav from "./components/Nav/Nav";
import Projects from "./components/Projects/Projects";
import Skills from "./components/About/Skills";
import TitleCard from "./components/Header/TitleCard";

const Layout = () => {
  return (
    <div className="grid h-[100svh] w-screen">
      <Nav />
      <div id="content" className="grid gap-y-10 overflow-y-auto">
        <ContentContainer>
          <TitleCard />
        </ContentContainer>
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
