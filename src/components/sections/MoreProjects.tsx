// This rule is not needed here as elements are not inserted/removed so index as key bugs shouldn't happen
/* eslint-disable react-x/no-array-index-key */

import { GlobeIcon } from "@radix-ui/react-icons";
import GithubIcon from "../ui/GithubIcon";

const DemoButton = ({ link }: { link: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="grow mt-2 px-3 py-1 text-sm font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition flex justify-between items-center cursor-pointer"
  >
    <span>View Project</span>
    <GlobeIcon className="h-6 w-6" />
  </a>
);

const CodeButton = ({ link }: { link: string }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="grow mt-2 px-3 py-2 text-sm font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition flex justify-between items-center cursor-pointer"
  >
    <span>View Code</span>
    <GithubIcon className="dark:fill-white" />
  </a>
);

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern developer portfolio showcasing projects and skills.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Markdown Editor",
    description: "A real-time markdown editor with preview support.",
    tech: ["React", "Vite", "Marked.js"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Task Manager",
    description: "A simple task management app with local storage.",
    tech: ["React", "TypeScript", "LocalStorage"],
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    tech: ["React", "API", "Tailwind"],
    demoLink: "#",
    codeLink: "#",
  },
];

export default function MoreProjects() {
  return (
    <div className="px-2 w-full justify-self-center flex flex-col items-center">
      <section className="text-slate-950 dark:text-violet-50 px-2 pb-2 md:pb-6 md:px-6 py-4 w-full max-w-6xl bg-white/30 dark:bg-white/10 backdrop-blur-lg backdrop-saturate-150 rounded-2xl shadow-lg grid gap-6">
        <h2 className="[text-shadow:_2px_2px_5px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-3xl md:text-5xl font-semibold text-center justify-self-start">
          More Projects
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
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
              <div className="flex gap-4">
                <DemoButton link={project.demoLink} />
                <CodeButton link={project.codeLink} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
