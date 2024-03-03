import ProjectCard from "./ProjectCard";
import projectInfo from "./projectInfo";

const Projects = () => {
  return (
    <div>
      {projectInfo.map((info) => {
        return <ProjectCard key={info.title} {...info} />;
      })}
    </div>
  );
};

export default Projects;
