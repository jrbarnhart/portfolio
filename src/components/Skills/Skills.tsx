const Skills = () => {
  return (
    <div className="justify-self-center w-full grid grid-flow-col p-5 bg-neutral-400 dark:bg-neutral-800 rounded-3xl">
      <div>
        <h2 className="text-2xl border-b-2 border-black dark:border-neutral-50 w-fit">
          Languages
        </h2>
        <ul className="text-lg">
          <li>Javascript</li>
          <li>Typescript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl border-b-2 border-black dark:border-neutral-50 w-fit">
          Tools
        </h2>
        <ul className="text-lg">
          <li>
            <p>Mongo DB / Mongoose</p>
          </li>
          <li>
            <p>Express.js</p>
          </li>
          <li>
            <p>React</p>
          </li>
          <li>
            <p>Node.js</p>
          </li>
          <li>
            <p>Next.js</p>
          </li>
          <li>
            <p>Tailwind CSS</p>
          </li>
          <li>
            <p>Vitest</p>
          </li>
          <li>
            <p>NextAuth.js</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
