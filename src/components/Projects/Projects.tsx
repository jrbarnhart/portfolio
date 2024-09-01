import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="justify-self-center grid gap-y-3 w-full rounded-3xl"
    >
      <h1 className="col-span-full w-full text-3xl md:text-4xl font-bold">
        Projects
      </h1>
      <ProjectCard
        title="Memory Cards"
        src="/memoryCardsSplashLQ.jpg"
        alt="Screenshot of Memory Cards application"
        description="Test your memory by selecting unique cards for as long as possible."
        skills={["React", "API Fetching", "Javascript"]}
        demoUrl="https://memory-cards-xi.vercel.app/"
        codeUrl="https://github.com/xincryptedx/memory-cards"
      />
    </div>
  );
};

export default Projects;
