import DarkModeButton from "./DarkModeButton";
import AsteroidsBackground from "./AsteroidsBackground";
import Nav from "./Nav";
import TitleCard from "./TitleCard";

const Header = () => {
  return (
    <>
      <AsteroidsBackground />
      <TitleCard />
      <Nav />
      <DarkModeButton />
    </>
  );
};

export default Header;
