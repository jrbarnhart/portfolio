import FunButton from "./FunButton";
import TitleCard from "./TitleCard";

const Lander = () => {
  return (
    <div className="grid grid-rows-[min-content_repeat(2,_minmax(min-content,_1fr))] h-screen w-full bg-transparent text-neutral-950 dark:text-neutral-50">
      <TitleCard />
      <div className="grid content-center justify-center pt-12">
        <FunButton />
      </div>
      <div className="grid items-start pt-10">
        <p className="w-full border-t-2 border-b-2 border-green-500 text-xl md:text-2xl text-center">
          &darr;Scroll for formal experience&darr;
        </p>
      </div>
    </div>
  );
};

export default Lander;
