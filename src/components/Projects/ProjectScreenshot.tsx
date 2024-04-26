import { useState } from "react";

const ProjectScreenshot = ({
  src,
  alt,
  demoUrl,
  codeUrl,
}: {
  src: string;
  alt: string;
  demoUrl: string;
  codeUrl: string;
}) => {
  const [linksVisible, setLinksVisible] = useState(false);
  const visibleClasses =
    "not-sr-only absolute top-0 grid grid-flow-col gap-x-10 w-full max-w-[600px] h-full items-center";
  const notVisibleClasses = "sr-only";

  return (
    <div
      onClick={() => {
        setLinksVisible(!linksVisible);
      }}
      onMouseEnter={() => {
        setLinksVisible(true);
      }}
      onMouseLeave={() => {
        setLinksVisible(false);
      }}
      className="relative justify-self-center grid row-span-2 md:col-start-2 border-2 border-green-500 rounded-2xl"
    >
      <img className="rounded-xl" src={src} alt={alt} />
      <div className={linksVisible ? visibleClasses : notVisibleClasses}>
        <div className="bg-neutral-950 opacity-90 rounded-xl h-full w-full absolute top-0" />
        <a
          className="justify-self-end w-24 bg-zinc-950 rounded-lg px-2 py-1 border-green-500 border-2 text-2xl text-center z-10"
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          onFocus={() => {
            setLinksVisible(true);
          }}
          onBlur={() => {
            setLinksVisible(false);
          }}
        >
          Demo
        </a>
        <a
          className="w-24 bg-zinc-950 rounded-lg px-2 py-1 border-green-500 border-2 text-2xl text-center z-10"
          href={codeUrl}
          target="_blank"
          rel="noreferrer"
          onFocus={() => {
            setLinksVisible(true);
          }}
          onBlur={() => {
            setLinksVisible(false);
          }}
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectScreenshot;
