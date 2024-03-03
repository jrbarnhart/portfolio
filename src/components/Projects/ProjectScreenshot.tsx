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
  return (
    <div className="relative grid row-span-3 col-start-2">
      <img className="rounded-xl" src={src} alt={alt} />
      <div className="absolute top-0 grid grid-flow-col w-full h-full justify-items-center items-center">
        <a className="" href={demoUrl} target="_blank" rel="noreferrer">
          Demo
        </a>
        <a href={codeUrl} target="_blank" rel="noreferrer">
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectScreenshot;
