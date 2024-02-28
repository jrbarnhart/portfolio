import CTAButton from "./CTAButton";

const TitleCard = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 w-fit justify-self-center">
      <p className="col-start-1 self-end">Hi! My name is</p>
      <h1 className="col-start-1 row-start-2 col-span-2 text-5xl self-center">
        Joshua Barnhart
      </h1>
      <CTAButton />
    </div>
  );
};

export default TitleCard;
