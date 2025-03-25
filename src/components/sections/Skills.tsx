// This rule is not needed here as elements are not inserted/removed so index as key bugs shouldn't happen
/* eslint-disable react-x/no-array-index-key */

export default function Skills() {
  const skillData: { title: string; skills: string[] }[] = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
    },
    {
      title: "Frontend",
      skills: ["React", "TailwindCSS", "Vite", "Remix/React Router"],
    },
    { title: "Backend", skills: ["NestJS", "Prisma", "PostgreSQL", "Express"] },
    { title: "Testing", skills: ["Jest", "Vitest", "Testing Library"] },
    { title: "DevOps", skills: ["Docker", "Nginx", "DigitalOcean", "PM2"] },
    {
      title: "Other Tools",
      skills: ["Node", "Git", "Swagger/OpenAPI", "ESLint/Prettier", "Postman"],
    },
  ];

  return (
    <div className="px-2">
      <section className="text-slate-950 dark:text-violet-50 px-2 md:px-6 py-4 w-full max-w-6xl justify-self-center bg-white/30 dark:bg-white/10 backdrop-blur-lg backdrop-saturate-150 rounded-2xl shadow-lg grid gap-4 md:grid-cols-2">
        <h2 className="[text-shadow:_2px_2px_5px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-3xl md:text-5xl font-semibold col-span-full">
          Skills
        </h2>
        {skillData.map((data, index) => (
          <div
            className="px-4 py-4 bg-black/5 dark:bg-white/10 backdrop-blur-md shadow-md shadow-indigo-950/50 dark:shadow-indigo-950 rounded-2xl transition hover:bg-white/10 dark:hover:bg-white/20 grid gap-4 content-start"
            key={index}
          >
            <h2 className="col-span-full [text-shadow:_1px_1px_2px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-xl md:text-2xl">
              {data.title}
            </h2>
            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => (
                <span
                  className="[text-shadow:_1px_1px_3px_var(--tw-shadow-color)] shadow-sm shadow-slate-500/50 dark:shadow-indigo-950 text-sm md:text-base font-semibold min-w-20 h-fit p-3 bg-white/30 dark:bg-white/10 rounded-full flex items-center justify-center transition-all hover:bg-white/60 dark:hover:bg-white/30"
                  key={index}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
