const FunButton = () => {
  return (
    <button className="grid justify-items-center">
      <div className="grid grid-rows-[min-content,_1fr] w-36 md:w-56 lg:w-72 aspect-[9_/_7] bg-neutral-300 border-2 border-black rounded-md">
        <div className="relative w-[80%] aspect-[4_/_3] bg-black justify-self-center mt-2 md:mt-4 lg:mt-5 mb-[5px] md:mb-2 lg:mb-3 grid items-center rounded-md">
          <div
            className="absolute top-0 left-0 w-full h-full border-2 border-black rounded-md shadow-[inset_0_0_25px_rgba(255,_255,_255,_0.3)]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, transparent 0px, rgba(0, 0, 0, 0.8) 3px, transparent 3px)",
            }}
          />
          <p className="text-green-500 text-xl lg:text-2xl select-none">
            &gt;Click for fun_
          </p>
        </div>
        <div className="relative h-full border-t-2 border-neutral-700">
          <div className="absolute right-2 w-[13%] h-full border-l-2 border-r-2 border-neutral-700 grid items-center justify-end">
            <div className="w-[6px] md:w-2 aspect-square mr-[2px] md:mr-1 rounded-full bg-green-500 border-neutral-700 border-[1px]" />
          </div>
        </div>
      </div>
      <div className="w-16 md:w-24 lg:w-32 aspect-[16_/_3] bg-neutral-300 border-2 border-t-0 border-b-0 border-black rounded-sm" />
      <div className="w-24 md:w-36 lg:w-48 aspect-[12_/_1] bg-neutral-300 border-2 border-black rounded-sm" />
    </button>
  );
};

export default FunButton;
