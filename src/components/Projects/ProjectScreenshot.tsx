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
    "not-sr-only absolute top-0 grid grid-flow-col w-full max-w-[600px] h-full justify-items-center items-center";
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
      className="relative justify-self-center grid row-span-2 md:col-start-2"
    >
      <img className="rounded-xl" src={src} alt={alt} />
      <div className={linksVisible ? visibleClasses : notVisibleClasses}>
        <div className="bg-neutral-600 opacity-50 rounded-xl h-full w-full absolute top-0" />
        <a
          className="bg-neutral-600 rounded-lg px-2 border-black border-2 py-1 text-2xl z-10"
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
          className="bg-neutral-600 rounded-lg px-2 border-black border-2 py-1 text-2xl z-10"
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
