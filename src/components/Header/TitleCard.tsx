const TitleCard = () => {
  return (
    <div id="title" className="mt-8 lg:mt-28 flex gap-x-1">
      <div>
        <p className="self-end text-4xl text-green-500">Hello world!</p>
        <p className="row-start-2 text-2xl md:text-3xl lg:text-4xl">
          {"My name's Joshua. This is my full-stack portfolio."}
        </p>
      </div>
      <div className="size-28 bg-green-500 rounded-full flex-shrink-0"></div>
    </div>
  );
};

export default TitleCard;
