import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div
      id="projects"
      className="justify-self-center grid min-[900px]:grid-cols-2 gap-y-3 gap-x-2 md:gap-x-5 w-full rounded-3xl"
    >
      <h1 className="col-span-full w-full text-3xl font-bold">Projects</h1>
      <ProjectCard
        title="Munchlify Meal Planner"
        date="July, 2024"
        src="/munchlify.gif"
        thumbSrc="/munchlifyThumb.png"
        alt="Gif of meal planner application"
        description="Plan meals by adding recipes to a calendar. Select from the built-in recipe library or add your own."
        skills={[
          "Remix",
          "React",
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
        title="Conway's Game of Life"
        date="March, 2024"
        src="/gameOfLife.gif"
        thumbSrc="/gameOfLife.png"
        alt="Gif of Conway's Game of Life cellular automata"
        description="Simulate cellular life forms in John Conway's Game of Life. Use a random initial state or draw your own."
        skills={["TypeScript", "React", "Vite", "Tailwind", "Vitest"]}
        demoUrl="https://conway-life-simulation.netlify.app/"
        codeUrl="https://github.com/jrbarnhart/game-of-life"
      />
      <ProjectCard
        title="Monty Hall Demo"
        date="June, 2024"
        src="/montyHall.gif"
        thumbSrc="/montyHall.png"
        alt="Gif of an application demonstrating the Monty Hall Problem"
        description="Simple demo that explains the Monty Hall probability scenario."
        skills={["React", "TypeScript", "TailwindCSS"]}
        demoUrl="https://jrbarnhart.github.io/monty-hall/"
        codeUrl="https://github.com/jrbarnhart/monty-hall"
      />
    </div>
  );
};

export default Projects;
