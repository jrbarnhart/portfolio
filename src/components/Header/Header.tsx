import DarkModeButton from "./DarkModeButton";
import AsteroidsBackground from "./AsteroidsBackground";
import TitleCard from "./TitleCard";

const Header = () => {
  return (
    <div className="sticky top-0 z-[999] w-full md:h-96 bg-transparent text-neutral-50 dark:text-black grid">
      <AsteroidsBackground />
      <TitleCard />
      <DarkModeButton />
    </div>
  );
};

export default Header;
