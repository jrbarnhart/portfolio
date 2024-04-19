import FunButton from "./FunButton";
import TitleCard from "./TitleCard";

const Lander = () => {
  return (
    <div className="grid grid-rows-[repeat(3,_min-content)] h-screen w-full bg-transparent text-neutral-950 dark:text-neutral-50">
      <TitleCard />
      <div className="grid content-center justify-center py-12">
        <FunButton />
      </div>
    </div>
  );
};

export default Lander;
