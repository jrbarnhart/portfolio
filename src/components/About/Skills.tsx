import SkillTag from "../SkillTag";

const Skills = () => {
  return (
    <div className="grid gap-y-4">
      <h3 className="col-span-full w-full text-3xl font-bold">Skills</h3>
      <div className="justify-self-center w-full flex flex-wrap gap-2">
        <SkillTag
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          skillName="JavaScript"
        />
        <SkillTag
          skillName="TypeScript"
          link="https://www.typescriptlang.org/"
        />
        <SkillTag
          skillName="HTML"
          link="https://developer.mozilla.org/en-US/docs/Web/HTML"
        />
        <SkillTag
          skillName="CSS"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillTag skillName="Tailwind" link="https://tailwindcss.com/" />
        <SkillTag skillName="React" link="https://react.dev/" />
        <SkillTag skillName="Remix" link="https://remix.run/" />
        <SkillTag
          skillName="Next.js"
          link="https://nextjs.org/"
          bgLight={true}
        />
        <SkillTag skillName="Prisma" link="https://www.prisma.io/" />
        <SkillTag skillName="PostgreSQL" link="https://www.postgresql.org/" />
        <SkillTag skillName="MongoDB" link="https://www.mongodb.com/" />
        <SkillTag
          skillName="Node.js"
          link="https://nodejs.org/"
          bgLight={true}
        />
        <SkillTag skillName="Express.js" link="https://expressjs.com/" />
        <SkillTag skillName="Vite" link="https://vitejs.dev/" />
        <SkillTag skillName="Webpack" link="https://webpack.js.org/" />
        <SkillTag skillName="Docker" link="https://www.docker.com/" />
        <SkillTag skillName="Nginx" link="https://nginx.org/en/" />
        <SkillTag
          skillName="Provisioning"
          link="https://en.wikipedia.org/wiki/Provisioning_(technology)"
        />
      </div>
    </div>
  );
};

export default Skills;
