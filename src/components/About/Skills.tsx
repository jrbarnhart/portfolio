import Icons from "./Icons";
import SVGLink from "../SVGLink/SVGLink";

const Skills = () => {
  return (
    <div className="grid mb-10 md:mb-20">
      <h3 className="col-span-full justify-self-center w-min text-center text-2xl md:text-3xl font-bold">
        Skills
      </h3>
      <div className="justify-self-center w-full max-w-[768px] flex flex-wrap gap-5 justify-center content-center p-5">
        <SVGLink
          skillName="JavaScript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        >
          <Icons.js />
        </SVGLink>
        <SVGLink
          skillName="HTML"
          link="https://developer.mozilla.org/en-US/docs/Web/HTML"
        >
          <Icons.html />
        </SVGLink>
        <SVGLink
          skillName="CSS"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        >
          <Icons.css />
        </SVGLink>
        <SVGLink skillName="TypeScript" link="https://www.typescriptlang.org/">
          <Icons.ts />
        </SVGLink>
        <SVGLink skillName="Tailwind" link="https://tailwindcss.com/">
          <Icons.tailwind />
        </SVGLink>
        <SVGLink skillName="Node.js" link="https://nodejs.org/" bgLight={true}>
          <Icons.node />
        </SVGLink>
        <SVGLink skillName="React" link="https://react.dev/">
          <Icons.react />
        </SVGLink>
        <SVGLink skillName="Vite" link="https://vitejs.dev/">
          <Icons.vite />
        </SVGLink>
        <SVGLink skillName="Next.js" link="https://nextjs.org/" bgLight={true}>
          <Icons.next />
        </SVGLink>
        <SVGLink skillName="Express.js" link="https://expressjs.com/">
          <Icons.express />
        </SVGLink>
        <SVGLink skillName="MongoDB" link="https://www.mongodb.com/">
          <Icons.mongoDb />
        </SVGLink>
      </div>
    </div>
  );
};

export default Skills;
