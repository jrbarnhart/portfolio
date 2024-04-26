import Icons from "./Icons";
import SVGLink from "../SVGLink/SVGLink";

const Skills = () => {
  return (
    <div className="grid">
      <h3 className="col-span-full justify-self-center w-min border-b-2 border-green-500 text-center text-2xl font-bold">
        Skills
      </h3>
      <div className="justify-self-center w-full flex flex-wrap gap-x-10 gap-y-8 justify-center p-5">
        <SVGLink link="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
          <Icons.js />
        </SVGLink>
        <SVGLink link="https://developer.mozilla.org/en-US/docs/Web/HTML">
          <Icons.html />
        </SVGLink>
        <SVGLink link="https://developer.mozilla.org/en-US/docs/Web/CSS">
          <Icons.css />
        </SVGLink>
        <SVGLink link="https://tailwindcss.com/">
          <Icons.tailwind />
        </SVGLink>
        <SVGLink link="https://www.typescriptlang.org/">
          <Icons.ts />
        </SVGLink>
        <SVGLink link="https://nodejs.org/">
          <Icons.node />
        </SVGLink>
        <SVGLink link="https://react.dev/">
          <Icons.react />
        </SVGLink>
        <SVGLink link="https://vitejs.dev/">
          <Icons.vite />
        </SVGLink>
        <SVGLink link="https://nextjs.org/">
          <Icons.next />
        </SVGLink>
        <SVGLink link="https://expressjs.com/">
          <Icons.express />
        </SVGLink>
        <SVGLink link="https://www.mongodb.com/">
          <Icons.mongoDb />
        </SVGLink>
      </div>
    </div>
  );
};

export default Skills;
