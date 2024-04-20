import FunButton from "./FunButton";
import TitleCard from "./TitleCard";

const Lander = () => {
  return (
    <div className="grid grid-rows-[min-content_minmax(min-content,_1fr)_1fr] h-screen w-full bg-transparent text-neutral-950 dark:text-neutral-50">
      <TitleCard />
      <div className="grid content-center justify-center py-12">
        <FunButton />
      </div>
      <div className="grid items-end">
        <p className="w-full border-t-2 border-b-2 border-green-500 text-xl text-center mb-12">
          &darr;Scroll for formal experience&darr;
        </p>
      </div>
    </div>
  );
};

export default Lander;
