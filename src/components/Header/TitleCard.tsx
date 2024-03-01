import CTAButton from "./CTAButton";
import Nav from "./Nav";

const TitleCard = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-3 w-[768px] justify-self-center px-5">
      <p className="col-start-1 col-span-4 self-end">Hi! My name is</p>
      <h1 className="col-start-1 row-start-2 col-span-3 text-5xl self-center">
        Joshua Barnhart
      </h1>
      <CTAButton />
      <Nav />
    </div>
  );
};

export default TitleCard;
