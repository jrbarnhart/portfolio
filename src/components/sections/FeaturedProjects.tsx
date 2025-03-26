// This rule is not needed here as elements are not inserted/removed so index as key bugs shouldn't happen
/* eslint-disable react-x/no-array-index-key */

import { GlobeIcon } from "@radix-ui/react-icons";
import GithubIcon from "../ui/GithubIcon";
import brighterApiUrl from "../../assets/brighterApiScreenshot.jpg";
import gameOfLifeUrl from "../../assets/gameOfLife.png";
import brighterMapUrl from "../../assets/brighterMapScreenshot.jpg";
import brighterInterfaceUrl from "../../assets/brighterInterfaceScreenshot.jpg";

const DemoButton = ({ demoUrl }: { demoUrl: string | null }) => {
  if (demoUrl)
    return (
      <a
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="grow md:max-w-44 mt-2 px-3 py-1 text-sm font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition flex justify-between items-center cursor-pointer"
      >
        <span>View Project</span>
        <GlobeIcon className="h-6 w-6" />
      </a>
    );

  return (
    <p className="grow md:max-w-44 mt-2 px-3 py-1 text-sm font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition flex justify-between items-center cursor-pointer">
      Demo Coming Soon
    </p>
  );
};

const CodeButton = ({ codeUrl }: { codeUrl: string }) => {
  return (
    <a
      href={codeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="grow md:max-w-44 mt-2 px-3 py-2 text-sm font-semibold bg-violet-500 hover:bg-violet-600 text-white rounded-lg transition flex justify-between items-center cursor-pointer"
    >
      <span>View Code</span>
      <GithubIcon className="dark:fill-white" />
    </a>
  );
};

type FeaturedProject = {
  title: string;
  description: string;
  tech: string[];
  demoUrl: string | null;
  codeUrl: string;
  isFeatured: boolean;
  imageUrl: string | null;
};

export default function FeaturedProjects() {
  const projects: FeaturedProject[] = [
    {
      title: "Brighter API",
      description:
        "A REST API for getting data about Brighter Shores, a new MMO from the creator of Runescape. Can be used to power interactive tools like Brighter Map.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Prisma"],
      demoUrl: "https://brshapi.com",
      codeUrl: "https://github.com/jrbarnhart/brighter-api",
      isFeatured: true,
      imageUrl: brighterApiUrl,
    },
    {
      title: "Brighter API Interface",
      description: "A front-end interface to interact with the Brighter API.",
      tech: ["React", "Vite", "TypeScript"],
      demoUrl: null,
      codeUrl: "https://github.com/jrbarnhart/brighter-api-interface",
      isFeatured: false,
      imageUrl: brighterInterfaceUrl,
    },
    {
      title: "Brighter Map",
      description:
        "An interactive map for Brighter Shores with filtering and search.",
      tech: ["React", "R3F", "TypeScript"],
      demoUrl: "https://joshuarbarnhart.com/map",
      codeUrl: "https://github.com/jrbarnhart/brighter-shores-map",
      isFeatured: false,
      imageUrl: brighterMapUrl,
    },
    {
      title: "Game of Life",
      description:
        "A creative, interactive implementation of Conway's Game of Life.",
      tech: ["React", "Canvas", "Algorithms"],
      demoUrl: "https://conway-life-simulation.netlify.app/",
      codeUrl: "https://github.com/jrbarnhart/game-of-life",
      isFeatured: false,
      imageUrl: gameOfLifeUrl,
    },
  ];

  return (
    <div className="px-2 justify-self-center">
      <section className="text-slate-950 dark:text-violet-50 px-2 pb-2 md:pb-6 md:px-6 py-4 w-full max-w-6xl bg-white/30 dark:bg-white/10 backdrop-blur-lg backdrop-saturate-150 rounded-2xl shadow-lg grid gap-6">
        {/* Section Header */}
        <h2 className="[text-shadow:_2px_2px_5px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-3xl md:text-5xl font-semibold text-center justify-self-start">
          Featured Projects
        </h2>

        {/* Featured Project (Brighter API) */}
        <div className="p-6 bg-black/5 dark:bg-white/10 backdrop-blur-md shadow-md shadow-indigo-950/50 dark:shadow-indigo-950 rounded-2xl transition hover:bg-white/10 dark:hover:bg-white/20 grid md:grid-cols-2 gap-4 content-start">
          <div className="overflow-hidden rounded-2xl md:col-start-2 md:row-span-full">
            <img
              src={projects[0].imageUrl ?? ""}
              alt={projects[0].title}
              className="w-full object-cover rounded-2xl opacity-90 hover:opacity-100 transition"
            />
          </div>
          <div className="h-full flex flex-col justify-between gap-4">
            <h3 className="[text-shadow:_1px_1px_2px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-2xl md:text-3xl font-semibold">
              {projects[0].title}
            </h3>
            <p className="grow [text-shadow:_1px_1px_2px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950  text-md md:text-lg opacity-80">
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
            <div className="flex gap-4">
              <DemoButton demoUrl={projects[0].demoUrl} />
              <CodeButton codeUrl={projects[0].codeUrl} />
            </div>
          </div>
        </div>

        {/* Grid for Remaining Projects */}
        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => {
            if (project.isFeatured) return null;
            return (
              <div
                key={index}
                className="p-4 bg-black/5 dark:bg-white/10 backdrop-blur-md shadow-md shadow-indigo-950/50 dark:shadow-indigo-950 rounded-2xl transition hover:bg-white/10 dark:hover:bg-white/20 flex flex-col gap-3 content-start"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={project.imageUrl ?? ""}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-2xl opacity-90 hover:opacity-100 transition"
                  />
                </div>
                <h3 className="[text-shadow:_1px_1px_2px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-xl md:text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="grow [text-shadow:_1px_1px_2px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950  text-sm md:text-base opacity-80">
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
                  <DemoButton demoUrl={project.demoUrl} />
                  <CodeButton codeUrl={project.codeUrl} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
