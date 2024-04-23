import Portrait from "./Portrait";

const About = () => {
  return (
    <div
      id="about"
      className="justify-self-center grid gap-y-2 px-5 py-3 rounded-3xl mt-12"
    >
      <h2 className="col-span-full justify-self-center text-2xl font-bold">
        About
      </h2>
      <Portrait />
      <p className="self-center text-center md:text-left text-xl">
        I am a web developer who creates interactive applications with modern
        tools. I see education as a lifelong process and I try to be always
        learning something new.
      </p>
      <p className="self-center text-center md:text-left text-xl">
        Outside of web dev my interests include game development, storytelling
        and world creation, math and physics, and more recently machine
        learning.
      </p>
    </div>
  );
};

export default About;
