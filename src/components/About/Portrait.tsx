import portraitImage from "../../assets/cartoonMe.jpg";

const Portrait = () => {
  return (
    <div className="relative group h-fit w-fit justify-self-center md:justify-self-end">
      <img
        src={portraitImage}
        alt="A cartoon portrait of Joshua Barnhart"
        className="h-52 rounded-3xl blur-none justify-self-center self-center shadow-lg shadow-black"
      />
      <div className="absolute bottom-4 left-0 h-fit w-full rounded-3xl bg-neutral-800 opacity-0 group-hover:opacity-90 transition-opacity duration-75">
        <p className=" text-neutral-50 text-center w-full opacity-0 group-hover:opacity-100 transition-opacity duration-75">
          Created with Microsoft Copilot
        </p>
      </div>
    </div>
  );
};

export default Portrait;
