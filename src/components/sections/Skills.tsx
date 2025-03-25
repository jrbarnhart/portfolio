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
      title: "Tools",
      skills: ["Git", "Swagger/OpenAPI", "ESLint/Prettier", "Postman"],
    },
  ];

  return (
    <section className="text-slate-950 dark:text-violet-50 px-6 mx-2 py-4 w-full max-w-6xl justify-self-center bg-black/10 dark:bg-white/10 backdrop-blur-lg backdrop-saturate-150 rounded-2xl shadow-lg">
      <h2 className="[text-shadow:_2px_2px_5px_var(--tw-shadow-color)] shadow-slate-500/50 dark:shadow-indigo-950 text-3xl md:text-5xl font-semibold">
        Skills
      </h2>
      {skillData.map((data, index) => (
        <div key={index}>
          <h2>{data.title}</h2>
          {data.skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      ))}
    </section>
  );
}
