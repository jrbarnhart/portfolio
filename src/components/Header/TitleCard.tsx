import CTAButton from "./CTAButton";
import Nav from "./Nav";

const TitleCard = () => {
  return (
    <div className="grid grid-cols-2 gap-y-2 w-full max-w-[768px] h-full justify-self-center px-5">
      <p className="col-start-1 col-span-full self-end">Hi! My name is</p>
      <h1 className="col-start-1 row-start-2 col-span-full text-4xl md:text-5xl self-center">
        Joshua Barnhart
      </h1>
      <CTAButton />
      <Nav />
    </div>
  );
};

export default TitleCard;
