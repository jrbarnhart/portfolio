import Icons from "./Icons";
import SVGLink from "../SVGLink/SVGLink";

const Skills = () => {
  return (
    <div className="justify-self-center w-full grid grid-flow-col p-5 bg-neutral-400 dark:bg-neutral-800 rounded-3xl">
      <SVGLink link="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
        <Icons.js />
      </SVGLink>
      <SVGLink link="">
        <Icons.express />
      </SVGLink>
    </div>
  );
};

export default Skills;
