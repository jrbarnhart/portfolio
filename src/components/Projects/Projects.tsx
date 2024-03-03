import ProjectCard from "./ProjectCard";
import projectInfo from "./projectInfo";

const Projects = () => {
  return (
    <div className="justify-self-center grid w-[768]">
      {projectInfo.map((info) => {
        return <ProjectCard key={info.title} {...info} />;
      })}
    </div>
  );
};

export default Projects;
