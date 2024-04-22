const TitleCard = () => {
  return (
    <div className="grid grid-rows-[min-content_min-content] gap-y-2 w-full max-w-[540px] lg:max-w-[840px] h-full justify-self-center px-4 pt-24">
      <p className="self-end text-5xl md:text-6xl lg:text-7xl text-green-500">
        Hi!
      </p>
      <p className="row-start-2 text-2xl md:text-3xl lg:text-4xl">
        My name is Josh. This is my full&#x2011;stack portfolio. <br />
        <br />
        Which do you prefer?
      </p>
    </div>
  );
};

export default TitleCard;
