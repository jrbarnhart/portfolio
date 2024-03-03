import { ProjectCardProps } from "./types";

const ProjectCard = ({
  title,
  description,
  skills,
  demoUrl,
  codeUrl,
  src,
  alt,
}: ProjectCardProps) => {
  return (
    <div className="grid grid-cols-2 gap-x-2">
      <h2 className=" text-2xl">{title}:</h2>
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
      <p className="font-bold">{description}</p>
      <div>
        <h3 className="text-lg">Skills & Tech</h3>
        <div className="flex gap-2 flex-wrap">
          {skills.map((skill) => {
            return <p key={skill}>&#x2022;{skill}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
