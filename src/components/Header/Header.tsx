import AsteroidsBackground from "./AsteroidsBackground";
import TitleCard from "./TitleCard";

const Header = () => {
  return (
    <div className="relative z-[999] w-full md:h-96 bg-transparent text-neutral-50 dark:text-black grid">
      <AsteroidsBackground />
      <TitleCard />
    </div>
  );
};

export default Header;
