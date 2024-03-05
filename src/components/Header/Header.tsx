import AsteroidsBackground from "./AsteroidsBackground";
import TitleCard from "./TitleCard";

const Header = () => {
  return (
    <div className="relative w-full md:h-96 bg-transparent text-neutral-50 dark:text-black grid">
      <AsteroidsBackground />
      <TitleCard />
    </div>
  );
};

export default Header;
