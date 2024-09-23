import SkillTag from "../SkillTag";

const Skills = () => {
  return (
    <div className="grid gap-y-4">
      <h3 className="col-span-full w-full text-3xl md:text-4xl font-bold">
        Skills
      </h3>
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
        <SkillTag
          skillName="Node.js"
          link="https://nodejs.org/"
          bgLight={true}
        />
        <SkillTag skillName="React" link="https://react.dev/" />
        <SkillTag skillName="Vite" link="https://vitejs.dev/" />
        <SkillTag
          skillName="Next.js"
          link="https://nextjs.org/"
          bgLight={true}
        />
        <SkillTag skillName="Express.js" link="https://expressjs.com/" />
        <SkillTag skillName="MongoDB" link="https://www.mongodb.com/" />
      </div>
    </div>
  );
};

export default Skills;
