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
    <div className="grid md:grid-cols-2 gap-x-2">
      <h2 className=" text-2xl">{title}:</h2>
      <ProjectScreenshot
        src={src}
        alt={alt}
        demoUrl={demoUrl}
        codeUrl={codeUrl}
      />
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
