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
    <div className="grid grid-rows-[128px_min-content] border border-zinc-300 shadow-sm rounded-md">
      <img
        src={src}
        alt={alt}
        className="object-cover size-full rounded-t-md"
      />
      <div className="p-1 grid gap-1">
        <h2 className="font-bold">{title}</h2>
        <p className="">{description}</p>
        <div className="flex gap-2 flex-wrap font-bold text-lg md:text-xl">
          {skills.map((skill, index) => {
            return (
              <p
                className="w-min h-min p-1 px-2 bg-zinc-200 dark:bg-zinc-600 text-black dark:text-white rounded-md text-sm text-nowrap"
                key={index}
              >
                {skill}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
