import DarkModeButton from "./DarkModeButton";
import AsteroidsBackground from "./AsteroidsBackground";
import Nav from "./Nav";
import TitleCard from "./TitleCard";

const Header = () => {
  return (
    <div className="relative w-full bg-black dark:bg-white text-neutral-50 dark:text-black grid">
      <AsteroidsBackground />
      <TitleCard />
      <Nav />
      <DarkModeButton />
    </div>
  );
};

export default Header;
