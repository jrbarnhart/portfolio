import ProjectScreenshot from "./ProjectScreenshot";
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
    <div className="grid md:grid-cols-2 gap-x-2 md:gap-x-4 gap-y-4 p-3 border-b-2 last:border-b-0 border-green-500">
      <h2 className="col-span-full justify-self-center text-center text-2xl md:text-3xl font-bold">
        {title}
      </h2>
      <ProjectScreenshot
        src={src}
        alt={alt}
        demoUrl={demoUrl}
        codeUrl={codeUrl}
      />
      <div className="justify-self-center md:row-span-2 md:row-start-2 md:self-center">
        <p className="text-xl md:text-2xl">{description}</p>
        <div>
          <div className="flex gap-x-2 flex-wrap font-bold text-lg md:text-xl">
            {skills.map((skill) => {
              return <p key={skill}>&#x2022;{skill}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
