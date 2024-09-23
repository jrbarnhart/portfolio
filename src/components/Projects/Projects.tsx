import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="justify-self-center grid md:grid-cols-2 gap-y-3 gap-x-2 md:gap-x-5 w-full rounded-3xl"
    >
      <h1 className="col-span-full w-full text-3xl md:text-4xl font-bold">
        Projects
      </h1>
      <ProjectCard
        title="Munchlify Meal Planner"
        date="July, 2024"
        src="/munchlify.gif"
        thumbSrc="/munchlifyThumb.png"
        alt="Gif of meal planner application"
        description="Plan meals by adding recipes to a calendar. Select from the built-in recipe library or add your own."
        skills={[
          "Remix",
          "TypeScript",
          "TailwindCSS",
          "Nginx",
          "VPS Deployment",
          "Domain Managment",
        ]}
        demoUrl="https://joshuarbarnhart.com/meal-planner"
        codeUrl="https://github.com/jrbarnhart/meal-planner-fullstack"
      />
      <ProjectCard
        title="Munchlify"
        date="July, 2024"
        src="/munchlify.gif"
        thumbSrc="/munchlifyThumb.png"
        alt="Gif of meal planner application"
        description="Plan meals by adding recipes to a calendar. Select from the built-in recipe library or add your own."
        skills={[
          "Remix",
          "TypeScript",
          "TailwindCSS",
          "Nginx",
          "VPS Deployment",
          "Domain Managment",
        ]}
        demoUrl="https://joshuarbarnhart.com/meal-planner"
        codeUrl="https://github.com/jrbarnhart/meal-planner-fullstack"
      />
    </div>
  );
};

export default Projects;
