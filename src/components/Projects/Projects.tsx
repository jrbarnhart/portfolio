import ProjectCard from "./ProjectCard";
import projectInfo from "./projectInfo";

const Projects = () => {
  return (
    <div className="justify-self-center grid gap-y-5 w-full p-5 bg-neutral-400 dark:bg-neutral-800 rounded-3xl">
      <h1 className="text-3xl">Projects</h1>
      {projectInfo.map((info) => {
        return <ProjectCard key={info.title} {...info} />;
      })}
    </div>
  );
};

export default Projects;
