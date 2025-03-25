// This rule is not needed here as elements are not inserted/removed so index as key bugs shouldn't happen
/* eslint-disable react-x/no-array-index-key */

export default function FeaturedProjects() {
  const projects = [
    {
      title: "Brighter API",
      description:
        "A REST API for Brighter Shores game data, powering interactive tools.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma"],
      link: "#",
      isFeatured: true,
    },
    {
      title: "Brighter API Interface",
      description: "A front-end interface to interact with the Brighter API.",
      tech: ["React", "Vite", "TypeScript"],
      link: "#",
    },
    {
      title: "Brighter Map",
      description:
        "An interactive map for Brighter Shores with filtering and search.",
      tech: ["React", "R3F", "TypeScript"],
      link: "#",
    },
    {
      title: "Game of Life",
      description:
        "A creative, interactive implementation of Conway's Game of Life.",
      tech: ["React", "Canvas", "Algorithms"],
      link: "#",
    },
  ];

  return (
    <div className="px-2 justify-self-center">
      <section className="text-slate-950 dark:text-violet-50 px-2 pb-2 md:pb-6 md:px-6 py-4 w-full max-w-6xl bg-white/30 dark:bg-white/10 backdrop-blur-lg backdrop-saturate-150 rounded-2xl shadow-lg grid gap-6">
        {/* Section Header */}
        <h2 className="[text-shadow:_2px_2px_5px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-3xl md:text-5xl font-semibold text-center">
          Featured Projects
        </h2>

        {/* Featured Project (Brighter API) */}
        <div className="p-6 bg-black/5 dark:bg-white/10 backdrop-blur-md shadow-md shadow-indigo-950/50 dark:shadow-indigo-950 rounded-2xl transition hover:bg-white/10 dark:hover:bg-white/20 grid gap-4 content-start">
          <h3 className="[text-shadow:_1px_1px_2px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-2xl md:text-3xl font-semibold">
            {projects[0].title}
          </h3>
          <p className="text-md md:text-lg opacity-80">
            {projects[0].description}
          </p>
          <div className="flex flex-wrap gap-2">
            {projects[0].tech.map((tech, index) => (
              <span
                key={index}
                className="text-sm font-semibold px-3 py-1 bg-white/30 dark:bg-white/10 rounded-full shadow-sm shadow-slate-500/50 dark:shadow-indigo-950"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href={projects[0].link}
            className="mt-2 px-4 py-2 text-md font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition"
          >
            View Project
          </a>
        </div>

        {/* Grid for Remaining Projects */}
        <div className="grid gap-4 md:grid-cols-3">
          {projects.slice(1).map((project, index) => (
            <div
              key={index}
              className="p-4 bg-black/5 dark:bg-white/10 backdrop-blur-md shadow-md shadow-indigo-950/50 dark:shadow-indigo-950 rounded-2xl transition hover:bg-white/10 dark:hover:bg-white/20 grid gap-3 content-start"
            >
              <h3 className="[text-shadow:_1px_1px_2px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-xl md:text-2xl font-semibold">
                {project.title}
              </h3>
              <p className="text-sm md:text-base opacity-80">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold px-3 py-1 bg-white/30 dark:bg-white/10 rounded-full shadow-sm shadow-slate-500/50 dark:shadow-indigo-950"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="mt-2 px-3 py-1 text-sm font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
