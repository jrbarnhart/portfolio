import ProjectCard from "./ProjectCard";
import projectInfo from "./projectInfo";

const Projects = () => {
  return (
    <div
      id="projects"
      className="justify-self-center grid gap-y-5 w-full p-5 rounded-3xl"
    >
      <h1 className="col-span-full justify-self-center w-full border-b-2 border-t-2 border-green-500 text-center text-3xl md:text-4xl font-bold">
        Projects
      </h1>
      {projectInfo.map((info) => {
        return <ProjectCard key={info.title} {...info} />;
      })}
    </div>
  );
};

export default Projects;
